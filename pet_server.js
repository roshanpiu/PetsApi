var express = require('express');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


var cats = require('./routes/pet_routes.js')(app);

var server = app.listen(3003,function(){console.log("Server is running");});
