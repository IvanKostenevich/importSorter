'use strict';


// eslint-disable-next-line no-unused-vars
function add() {
	if (arguments.length === 0) {
		throw new Error('you should pass the arguments');
	} else {
		var sum = 0;
		for (var i = 0; i < arguments.length; i++) {
			sum += arguments[i];
		}

		var addAndRepeat = function () {
			if (arguments.length) {
				for (var i = 0; i < arguments.length; i++) {
					sum += arguments[i];
				}
				return addAndRepeat;
			} else {
				return sum;
			}
		};

		addAndRepeat.toString = function () {
			return sum;
		};

		return addAndRepeat;
	}
}


