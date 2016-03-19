var express = require('express');
var app = express();


var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

var mongoose = require('mongoose');
mongoose.connect('mongodb://roshanpiu:roshan1991115@ds017688.mlab.com:17688/node_cats');
var db = mongoose.connection;

var cats = require('./routes/cat_routes.js')(app);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    var server = app.listen(3001,function(){
        console.log("Connected to the DB Server is running");
    });
});
