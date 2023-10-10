const express = require('express');
const mongoose = require('mongoose');
const CarModel = require('../models/Cars.js')

const router = express.Router();

router.get('/', async (req, res)=>{
    try{
        const response = await CarModel.find({});
        res.json(response);
    }
    catch(err){
        res.json(err);
    }
})

// Add new car data
router.post('/', async (req, res)=>{
    const car = new CarModel(req.body);

    try{
        const response = await car.save();
        res.json(response);
    }
    catch(err){
        res.json(err);
    }
})


module.exports = router;