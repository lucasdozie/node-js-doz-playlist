//list of programming language
var absoluteUrl = __dirname;
var filenameUrl = __filename;

var getList = function(arr){
	var newArr = [];
	//['arr', 'kelly', 'kate', 'pelle', 'dave'].
	arr.forEach(function(n){
		newArr.push(n['name']);
		console.log(n['name']+" "+n['info']);
	});
	/*console.log(arr);
		for(i = 0; i < arr.length; i++){
			console.log(arr[i]['name']+" "+arr[i]['info']);
			newArr.push(arr[i]['name']);
		}*/
	return newArr;
};

module.exports.sumAll = function(arr){
	var result = arr.reduce(function(a, b){
		//console.log("a = "+a+" while b = "+b);
		
		if (Number.isInteger(a) && Number.isInteger(b)) {
			//return a + b;
			console.log("a = "+a+" while b = "+b);
			var $output = parseInt(a) + parseInt(b);
		}else{
			var $output = a+` and `+b+` are not number`;
		}
		return $output;
	});

	return result;
};
module.exports.getList = getList;