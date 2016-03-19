var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 

var mongoose = require('mongoose');
mongoose.connect('mongodb://roshanpiu:roshan1991115@ds017678.mlab.com:17678/node_dogs');
var db = mongoose.connection;

var dogs = require('./routes/dog_routes.js')(app);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var server = app.listen(3002,function(){
        console.log("Connected to the DB Server is running");
    });
});