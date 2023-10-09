const express = require('express');
const jwt = require ('jsonwebtoken');
const bcrypt = require('bcryptjs');
const UserModel = require('../models/Users.js')

const router = express.Router();

router.post('/register', async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});
    // Check if the user email is already exists
    if(user){
        return res.json({message : 'User already registered! Please login or try with different username.'})
    }
    
    // Create new user
    const hashedPassword = await bcrypt.hash(password, 6);
    const newUser = new UserModel({username, password : hashedPassword});
    await newUser.save();

    res.json({message : 'Registered Successfully!'});
})

router.post('/login', async (req, res) => {
    const {username, password} = req.body;
    const user = await UserModel.findOne({username});

    if(!user){
        return res.json({message : "User Doesn't Exists!"})
    }

    // Check password is correct or not
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if(!isPasswordValid){
        return res.json({message : 'Incorrect Password! Please try again.'})
    }

    const token = jwt.sign({id : user._id}, "secret");
    res.json({token, userID : user._id});
})

module.exports = router;