var express=require('express');
var bodyParser=require('body-parser');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost');
var app=express();
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.listener(8080);
app.get('/',function (req, res) {
    res.sendFile('./15.leave.html',{root:__dirname})
});