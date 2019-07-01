var mongoose = require('mongoose');

var Food = require('./food');
var Restaurant = require('./restaurant');
var Address = require('./address');
var Category = require('./category');
var Comment = require('./comment');
const restaurantRouter = require("./route.js");
const express = require("express");
const bodyParser = require("body-parser");

mongoose.connect('mongodb://localhost:27017/database_new');


    console.log('Successfully connected');


    var app = express();
    var port =  5656;



// routes go here
    app.listen(port, () => {
        console.log(`http://localhost:${port}`)
    })

    app.use(bodyParser.json());
    app.use('/' , restaurantRouter);





    module.exports = app





