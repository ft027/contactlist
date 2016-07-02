/**
 * Created by Fabian Tschullik on 02.07.2016.
 */

/*
 ## Server-Seitig
 ++++++++   -   ++++++++
 ++++++++   -   ++++++++
 */

var mongoose = require('mongoose');
var contactSchema =  new mongoose.Schema({
    
    name: String,
    email: String,
    number: Number


});

var Contact = module.exports = mongoose.model('Contact', contactSchema);