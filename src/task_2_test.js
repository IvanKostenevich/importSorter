'use strict';

describe('ADDITION_MODULE',function () {
	it('should add 2 arguments with addTwoArguments(x, y) syntax',function () {
		expect(add(5,6)).to.be.eql(11);
	});
	it('should add 2 arguments with addTwoArguments(x)(y) syntax',function () {
		expect(add(10)(6)).to.be.eql(16);
	});
});