'use strict';


var add = function (a, b) {
	if (typeof b === 'undefined') {
		return function (y) {
			return a + y;
		};
	}
	return a + b;

};
add(3,4);
add(3)(4);