'use strict';


describe('getMaxSubSum function', function () {
	it('should be a function', function () {
		expect(ARRAY_PROCESSING_TOOL.getMaxSubSum).to.be.a.Function;
	});

	it('should return expected result', function () {
		var testArray = [-2, -1, 1, 2];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMaxSubSum(testArray), 3, 'numbers are equal');
	});

	it('should return 0 if array consists of negative numbers', function () {
		var arrayOfNegativeNumbers = [-1, -2, -4];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMaxSubSum(arrayOfNegativeNumbers), 0, 'numbers are equal');
	});

});

describe('getMaxValue function', function () {
	it('should be a function', function () {
		expect(ARRAY_PROCESSING_TOOL.getMaxValue).to.be.a.Function;
	});
	it('should return Max value', function () {
		var arrayToGetMaxValue = [-3, -35, 5, -70, 12];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMaxValue(arrayToGetMaxValue), 12, 'numbers are equal');
	});
});

describe('getMinValue function', function () {
	it('should be a function', function () {
		expect(ARRAY_PROCESSING_TOOL.getMinValue).to.be.a.Function;
	});
	it('should return Min value', function () {
		var arrayToGetMinValue = [-3, -5, 5, -7];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMinValue(arrayToGetMinValue), -7, 'numbers are equal');
	});
});

describe('getMedianValue function', function () {
	it('should be a function', function () {
		expect(ARRAY_PROCESSING_TOOL.getMedianValue).to.be.a.Function;
	});

	it('should return right median value if array.length is even', function () {
		var arrayToGetMediumValEven = [2, 6, -1, 5, -4, 8];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMedianValue(arrayToGetMediumValEven), 3.5, 'numbers are equal');
	});
	it('should return right median value if array.length is odd', function () {
		var arrayToGetMediumValOdd = [6, -7, 3, 5, 8];
		chai.assert.equal(ARRAY_PROCESSING_TOOL.getMedianValue(arrayToGetMediumValOdd), 5, 'numbers are equal');
	});
});

