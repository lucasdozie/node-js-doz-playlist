var module1  = require('./modules/module1');
var module2  = require('./modules/module2');

//function expression
var list = [{'name':'Java', 'info': 'Very Good'}, {'name':'C', 'info': 'Old but good'}, {'name':'PHP', 'info': 'Used by all'}, {'name':'Javascript', 'info': 'you can escape it'}, {'name':'Python', 'info':'Its not gonna bite.. lol'}, {'name':'Scala', 'info': 'I\'ve get no ideas as to how it works' }];
var numberArr = [2,5,7,9,90,9,23,7, 'james'];
var movieTitles = ['The Doomsday', 'Say goodbye mary', 'The tale of Emeka', 'Life of jesus'];
var anotherString = "Just anoher string content";
var personsArr = [
		{'name': 'Stan', 'gender': 'boy', 'address': "1, ademola adetokunbo street", 'Telephone': "0704575722"}, 
		{'name': 'Stephanie', 'gender': 'girl', 'address': "84, wall street", 'Telephone': "0804575722"}, 
		{'name': 'Jude', 'gender': 'boy', 'address': "20, wall street", 'Telephone': "0804575722"},
		{'name': 'Umar', 'gender': 'girl', 'address': "64, Minfa 1 estate", 'Telephone': "0812552722"},
		{'name': 'Mikel', 'gender': 'boy', 'address': "32, Iweka road", 'Telephone': "012552722"},
	];
module.exports.personsArr = personsArr;
//console.log(module1.objectPerson(personsArr));
console.log(module2.server);
//console.log(module4.server);
/*console.log(module1.sumAll(numberArr));
console.log(module1.logFile(movieTitles));*/
//console.log(getList(list));
//objectPerson();