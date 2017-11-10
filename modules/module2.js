//Clients and server

//get readStream content to the client
var module3 = require('./module3');
var module4 = require('./module4');
var index = require('../index');


const http =  require('http');
const port = 8000;
const domain_url = 'localhost';
console.log("person object: "+index.personsArr);
var server = server = http.createServer((req, res) => {
	//res.writeHead(200, {'Content-Type': 'text/html'});
	res.writeHead(200, {'Content-Type': 'application/json'});
	//module3.readMyStream.pipe(res);
	var output = module4.myObj(JSON.stringify(index.personsArr));
	res.end(output+' Its working mate, loading from '+req.url);
});

server.listen(port, domain_url);
console.log('alright guy, waiting to listen to port '+port);

module.exports.server = server;