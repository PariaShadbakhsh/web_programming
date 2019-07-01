var mongoose = require('mongoose');

var CategorySchema = mongoose.Schema({

    cid: {type: String}, // or an auto increment number,
    cname:{type: String}


});

var Category = mongoose.model('Category', CategorySchema,'categories');

module.exports = Category;