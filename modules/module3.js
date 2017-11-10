//Readable stream
const http = require('http');
const fs = require('fs');

//const readMyStream = fs.createReadStream(__dirname + '/readfile.txt', 'utf8', {start:1, end: 10});
//const writeFile = fs.createWriteStream(__dirname + '/reportfile.txt');
//readMyStream.pipe(writeFile);
const readMyStream = fs.createReadStream('index.html', 'utf8');
module.exports.readMyStream = readMyStream;
/*readMyStream.on('data', (piece) => {
	console.log('New piece received:');
	writeFile.write(piece);
});*/
