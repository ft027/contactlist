/**
 * Created by Fabian Tschullik on 01.07.2016.
 */
var express = require('express');
var app = express();
var mongoose =require('mongoose');
require('./models/contact.js');
require('./db.js');
var bodyParser = require('body-parser');


var Contact = mongoose.model('Contact');;




app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());
app.get('/contactlist', function(req, res){

    console.log("I received a GET request");


    Contact.find({}, function(err, docs) {
        if (!err){
            console.log(docs);
            res.json(docs)
        } else {throw err;}


    });





});

app.post('/contactlist', function (req, res){
    console.log(req.body);

    var contact = new Contact({

        name: req.body.name
    });


    contact.save(function (err, req) {
        if (err) console.log(err);
        else console.log('Saved ', req );

    });

});


app.delete('/contactlist/:id', function (req, res) {
    var id = req.params.id;
    console.log(id);


    Contact.find({ _id: id }).remove().exec();



});


app.listen(3000);
console.log("Server is running on Port 3000");