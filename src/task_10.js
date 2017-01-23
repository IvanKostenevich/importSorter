'use strict';

// eslint-disable-next-line no-unused-vars
var myMemoizeFunc = function (passedFunc) {
	var cache = {};
	return function (x) {
		if (x in cache) {
			return cache[x];
		} else {
			return cache[x] = passedFunc(x);
		}

	};
};
