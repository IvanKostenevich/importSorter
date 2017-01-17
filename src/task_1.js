'use strict';

Number.prototype.plus = function (x) {
	if (typeof x != 'number') {
		throw new Error('function should take a number');
	}
	return this + x;
};
Number.prototype.minus = function (x) {
	if (typeof x != 'number') {
		throw new Error('function should take a number');
	}
	return this - x;
};