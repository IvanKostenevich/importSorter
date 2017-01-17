'use strict';

describe('ADDITION_MODULE',function () {
	it('should add 2 arguments with addTwoArguments(x, y) syntax',function () {
		expect(ADDITION_MODULE.addTwoArguments(5,6)).to.be.eql(11);
	});
	it('should add 2 arguments with addTwoArguments(x)(y) syntax',function () {
		expect(ADDITION_MODULE.addTwoArguments(10)(6)).to.be.eql(16);
	});
	it('shuld add multiple arguments with addMultipleArguments(x)(y)(z)',function () {
		expect(ADDITION_MODULE.addMultipleArguments(9)(6)(5)).to.be.eql(20);
	});
});