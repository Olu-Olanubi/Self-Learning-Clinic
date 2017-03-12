var aritGeo = function(arr) {	
	var isAP = true;
	var isGP = true;
	if (arr.length == 0){
		return 0;
	}
	else {
		for (var i = 1; i < arr.length - 1; i++) {
			// //check if array not is an AP
			// if(array[i] - array[i-1] !== array[i+1] - array[i]){
			// 	//for (var j = 1; j < array.length - 1; j++){
			// 		//if array is not an AP, check if it is not a GP
			// 	if (array[i]/array[i-1] !== array[i+1]/array[i]) {
			// 		//then return -1
			// 		return -1;
			// 	}
			// 	//otherwise it is a GP
			// 	else{
			// 		//then return Geometric
			// 		return 'Geometric'
			// 	}
			// else{
			// 	// otherwise it is an AP

			// return "Arithmetic";
			// }
				
			
			// }
			if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) {
				isAP = false;
			}
			if (arr[i]/arr[i - 1] !== arr[i + 1]/arr[i]) {
				isGP = false;
			}
		}
		if (isAP) {
			return 'Arithmetic';
		};
		if (isGP) {
			return 'Geometric';
		};
		return -1;
	}
}
module.exports = aritGeo;

