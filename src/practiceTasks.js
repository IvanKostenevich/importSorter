'use strict';
//
// Number.prototype.plus = function (x) {
// 	if (typeof x != 'number') {
// 		throw new Error('function should take a number');
// 	}
// 	return this + x;
// };
// Number.prototype.minus = function (x) {
// 	if (typeof x != 'number') {
// 		throw new Error('function should take a number');
// 	}
// 	return this - x;
// };


// eslint-disable-next-line no-unused-vars
var ADD_SUBSTRACT_MODULE = (function () {

	return {

		plus: Number.prototype.plus = function (x) {
			if (typeof x != 'number') {
				throw new Error('function should take a number');
			}
			return this + x;
		},

		minus: Number.prototype.minus = function (x) {
			if (typeof x != 'number') {
				throw new Error('function should take a number');
			}
			return this - x;
		},


		add: function (a, b) {
			if (typeof b === 'undefined') {
				return function (y) {
					return a + y;
				};
			}
			return a + b;
		}
	};
}());


