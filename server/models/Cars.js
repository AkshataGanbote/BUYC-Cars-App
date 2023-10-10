const mongoose = require('mongoose');

const  CarSchema = new mongoose.Schema({
    name : {type : String, required: true},
    price: {type : String, required: true},
    color : {type : String, required: true},
    imageUrl : {type : String, required: true},
    
})

const CarModel = mongoose.model('cars', CarSchema);

module.exports = CarModel;
