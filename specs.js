//var myApp = require('../app/findMinMax.js');

/*describe('findMinMax', function(){

	it('should return [1,4] for input[1,2,3,4]', function(){
		//var myApp = new findMinMax();
	expect(findMinMax([1,2,3,4])).toEqual([1,4]);
	});
});*/

var findMinMax = require('../app/findMinMax.js');
(function() {
  'use strict'

  describe('Min-Max Numbers in a List: ', function () {

    describe('Return the min and max number in the list in a new list follows `[min, max]`', function () {

      it('should return [1,4] for [1, 2, 3 , 4]', function () {
      	
        expect(findMinMax([1, 2, 3, 4])).toEqual([1, 4]);
      });

      it('should return [4, 6] for [6, 4]', function () {
        expect(findMinMax([6, 4])).toEqual([4, 6]);
      });

      it('should return [2, 78] for [4, 66, 6, 44, 7, 78, 8, 68, 2]', function () {
        expect(findMinMax([4, 66, 6, 44, 7, 78, 8, 68, 2])).toEqual([2, 78]);
      });

      it('should return [-1, 2] for [-1, 0, 1, 2]', function () {
        expect(findMinMax([-1, 0, 1, 2])).toEqual([-1, 2]);
      });

      it('should return [-3, 1] for [1, 0, -1, -2, -3]', function () {
        expect(findMinMax([1, 0, -1, -2, -3])).toEqual([-3, 1]);
      });

      it('should return [-15, -3] for [-8, -10, -9, -15, -3, -12]', function () {
        expect(findMinMax([-8, -10, -9, -15, -3, -12])).toEqual([-15, -3]);
      });

      it('should return [0.5, 1.5] for [0.7, 1.5, 0.5, 1.2]', function () {
        expect(findMinMax([0.7, 1.5, 0.5, 1.2])).toEqual([0.5, 1.5]);
      });

      it('should return [-0.5, 8] for [0.1, -0.5, 1.3, 2, 8]', function () {
        expect(findMinMax([0.1, -0.5, 1.3, 2, 8])).toEqual([-0.5, 8]);
      });

      it('should return [a, c] for [a, b, c]', function () {
        expect(findMinMax(['a', 'b', 'c'])).toEqual(['a', 'c']);
      });

    });

    describe('Return the number in the list in a new list follows `[min]` when the number is the min and max number in that list', function () {

      it('should return [4] for [4, 4, 4, 4]', function () {
        expect(findMinMax([4, 4, 4, 4])).toEqual([4]);
      });

    });

  });

})();