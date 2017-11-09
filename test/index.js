var module1  = require('./module1');
//function expression
var list = [{'name':'Java', 'info': 'Very Good'}, {'name':'C', 'info': 'Old but good'}, {'name':'PHP', 'info': 'Used by all'}, {'name':'Javascript', 'info': 'you can escape it'}, {'name':'Python', 'info':'Its not gonna bite.. lol'}, {'name':'Scala', 'info': 'I\'ve get no ideas as to how it works' }];
var numberArr = [2,5,7,9,90,9,23,7, 'james'];
var objectPerson = function(e){
	var personsArr = [
		{'name': 'Stan', 'gender': 'boy', 'address': "1, ademola adetokunbo street", 'Telephone': "0704575722"}, 
		{'name': 'Stephanie', 'gender': 'girl', 'address': "84, wall street", 'Telephone': "0804575722"}, 
		{'name': 'Jude', 'gender': 'boy', 'address': "20, wall street", 'Telephone': "0804575722"},
		{'name': 'Umar', 'gender': 'girl', 'address': "64, Minfa 1 estate", 'Telephone': "0812552722"},
		{'name': 'Mikel', 'gender': 'boy', 'address': "32, Iweka road", 'Telephone': "012552722"},
	];

		for(i = 0; i < personsArr.length; i++){
			console.log(personsArr[i]['name']+" is a "+ personsArr[i]['gender']);
		}
	
};

console.log(module1.sumAll(numberArr));
//console.log(getList(list));
//objectPerson();