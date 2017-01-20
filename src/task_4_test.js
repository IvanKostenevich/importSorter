'use strict';

describe('splitNumberIntoDigitList function', function () {
	it('should split as expected', function () {
		var number = 123456;
		expect(splitNumberIntoDigitList(number)).to.be.eql([1, 2, 3, 4, 5, 6]);
	});
	it('number.length should be equal to number.length',function () {
		var number = 123456;
		expect(splitNumberIntoDigitList(number).length).to.be.eql(number.toString().length);
	});
});