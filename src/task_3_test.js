'use strict';

describe('shuffleArray function', function () {
	it('array.length after shuffling should be the same', function () {
		var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		expect(shuffleArray(testArray).length).to.be.eql(testArray.length);
	});
	it('should contain same elements as the original array', function () {
		var testArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
		var shuffledArray = shuffleArray(testArray);
		if(_.difference(testArray, shuffledArray).length !== 0){
			throw new Error ('the shuffling is not working properly');
		}
	});
});