var mongoose = require('mongoose');

var FoodSchema = mongoose.Schema({

    fid: {type: String}, // or an auto increment number,
    fname:{type: String},
    price:{type: Number}, // price of this food in Tomans
    description: {type: String},// optional
foodSet:{type: String}, // set of this food like kabab, khorak, salad


});

var Food = mongoose.model('Food', FoodSchema,'foods');

module.exports = Food;