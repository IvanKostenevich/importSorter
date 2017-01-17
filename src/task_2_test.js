'use strict';

describe('ADDITION_MODULE',function () {
	it('should add 2 arguments with addTwoArguments(x, y) syntax',function () {
		expect(add(5,6,1)).to.be.eql(12);
	});
	it('should add 2 arguments with addTwoArguments(x)(y) syntax',function () {
		expect(add(10)(6)(1)).to.be.eql(17);
	});
	it('should add 2 arguments with addTwoArguments(x)(a,b)(y) syntax',function () {
		expect(add(10)(3,3)(1)).to.be.eql(17);
	});
});