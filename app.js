
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use('/assets',express.static(__dirname + '/public'));

app.locals.characters = require('./characters.json');
var characterJson = app.locals.characters; 

// app.locals.music = require('./characterSelect.json');
// app.locals.music = require('./aboutUs.json');
// app.locals.music = require('./entrance.json');

app.get('/', function(req,res){
    res.redirect('/entrance');
});
app.get('/entrance', function(req, res){
    res.render('entrance');
});
app.get('/enter', function(req,res){
    res.render('home');
});

app.get('/aboutUs', function(req, res){
    res.render('aboutUs');
});

app.get('/characterSelect', function(req, res){
    res.render('characterSelect');
});
app.get('/music', function(req, res){
    res.render('music');
});
app.get('/characterSelect/:character', function(req, res){
    res.render('character',{character: req.params.character,theJson: characterJson});
    var selectedCharacter = req.params.character
    // console.log(characterJson.TODD);
});
app.get('/castCrew', function(req,res){
    res.render('credits');
})

app.listen(8000,function(){
    console.log('server is a go!');
});

