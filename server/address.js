var mongoose = require('mongoose');

var AddressSchema = mongoose.Schema({

    address_id: {type: String},
    address_city: {type: String},
    address_area: {type: String},
    address_Line:{type: String}

});

var Address = mongoose.model('Address', AddressSchema);

module.exports = Address;