'use strict';

describe('getMaxSubSum function', function () {
	it('should be a function', function () {
		expect(ARRAY_PROCESSING_TOOL.getMaxSubSum).to.be.a.Function;
	});
	
	it('should return expected result', function () {
		var testArray = [-2, -1, 1, 2];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMaxSubSum(testArray), 3, 'numbers are equal');
	});
	
	it('should return 0 if array consists of negative numbers',function () {
		var arrayOfNegativeNumbers = [-1,-2,-4];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMaxSubSum(arrayOfNegativeNumbers), 0, 'numbers are equal');
	});
	
});
