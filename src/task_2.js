'use strict';

// eslint-disable-next-line no-unused-vars
var ADDITION_MODULE = (function () {

	return {

		addTwoArguments: function (a, b) {
			if (typeof b === 'undefined') {
				return function (y) {
					return a + y;
				};
			}
			return a + b;

		},
		addMultipleArguments: function (a) {

			var sum = a;

			function addAndRepeat(b) {
				if (b) {
					sum += b;
					return addAndRepeat;
				}
				else {
					return sum;
				}
			}

			addAndRepeat.toString = function () {
				return sum;
			};

			return addAndRepeat;
		}
	};
}());


