/*
	function findMinMax(arr){
	
		var sortedArr = arr.sort();
		if (sortedArr[0] === sortedArr[sortedArr.length - 1]){
			return sortedArr[0];
		}
		else{
			return [sortedArr[0], sortedArr[sortedArr.length - 1]];
		}
	}
	*/
	



//module.exports = {

findMinMax = function(arr) {
   
   if(arr.length > 0){
		var sortedArr = arr.sort(function(a,b){return a-b});
		var min = sortedArr[0];
		var max = sortedArr[sortedArr.length - 1];
		if (min === max){
			return [min];
		}
		else{
			return [min, max];
		}
	
	}
 }
//}

module.exports  = findMinMax;