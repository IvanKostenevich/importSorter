'use strict';

function each (array, callback, thisArg) {

	for (var i = 0; i < array.length; i++) {
		callback.call(thisArg, array[i], i, array);
	}
	
}