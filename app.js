var index = require('./controller/index');
var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
	res.send('This is the home page');
});

app.get('/portfolio', (req, res) => {
	var data = {persons: index.personsArr, menu: ['Home', 'About us', 'Service', 'Contact', 'Blog'], author: 'Lucasatwon'};
	res.render('portfolio', data);
});

app.get('/home', function(req, res){
	res.sendFile(__dirname+"/index.html");
});

app.get('/product/:name', function(req, res){
	res.send("The name of this product is "+ req.params.name);
});
app.listen(8000);