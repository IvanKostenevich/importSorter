'use strict';

// eslint-disable-next-line no-unused-vars
function each(array, callback, thisArg) {

	for (var i = 0; i < array.length; i++) {
		callback.call(thisArg, array[i], i, array);
	}

}

// eslint-disable-next-line no-unused-vars
function map(array, callback, thisArg) {
	var finalArray = [];

	for (var i = 0; i < array.length; i++) {

		finalArray.push(callback.call(thisArg, array[i], i, array));
	}

	return finalArray;
}

// eslint-disable-next-line no-unused-vars
function find(array, callback, thisArg) {

	for (var i = 0; i < array.length; i++) {

		if (callback.call(thisArg, array[i], i, array) === true) {
			
			return array[i];
		}
	}
}

// eslint-disable-next-line no-unused-vars
function filter(array, callback, thisArg) {
	var finalArray = [];

	for (var i = 0; i < array.length; i++) {

		if (callback.call(thisArg, array[i], i, array) === true) {

			finalArray.push(array[i]);
		}
	}
	return finalArray;
}