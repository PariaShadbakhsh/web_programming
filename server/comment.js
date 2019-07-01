var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({

    comid: {type: String},// or an auto increment number,
    author: {type: String},
// rates
    quality: {type: Number}, // a number between 0-5
    packaging: {type: Number},
    deliveryTime: {type: Number},
    text: {type: String},
    created_at: {type: Date}, // time where comment submitted


});

var Comment = mongoose.model('comments', CommentSchema,'comments');

module.exports = Comment;