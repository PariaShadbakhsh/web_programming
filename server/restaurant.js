var mongoose = require('mongoose');
var Food = require('./food');
var Restaurant = require('./restaurant');
var Address = require('./address');
var Category = require('./category');
var Comment = require('./comment');



var RestaurantSchema = mongoose.Schema({

    id:String,
    name: String,
    logo: String,
    openingTime: Number,
    closingTime: Number,
    averageRate: Number
    ,
    address: {
        address_id: {type: String},
        address_city: {type: String},
        address_area: {type: String},
        address_Line:{type: String}

    },
    categories_r: [
        {
            type: Object,
            ref:'Category'
        }
    ],
    foods: [
        {
            type:Object,
            ref:'Food'
        }
    ],

    comments: [
        {
            type:Object,
            ref:'Comment'
        }
    ]

});



var Restaurant = mongoose.model('Restaurant', RestaurantSchema,'restaurants');

module.exports = Restaurant;