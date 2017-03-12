// var fizzBuzz = function()

// module.exports = fizzBuzz;

var fizzBuzz = function(num){
if (num % 3 == 0 ){
	if (num % 5 == 0){
		return 'FizzBuzz';
	}
	else{ 
		return "Fizz";
	}

}
else if (num % 5 == 0){
	return "Buzz";
}
else{
	return num;
}

}

module.exports = fizzBuzz;
