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

		if (callback.call(thisArg, array[i], i, array)) {

			return array[i];
		}
	}
}

// eslint-disable-next-line no-unused-vars
function filter(array, callback, thisArg) {
	var finalArray = [];

	for (var i = 0; i < array.length; i++) {

		if (callback.call(thisArg, array[i], i, array)) {

			finalArray.push(array[i]);
		}
	}
	return finalArray;
}

// eslint-disable-next-line no-unused-vars
function first(array) {
	if (!(array instanceof Array)) {
		throw new Error('function should take array as a parameter');
	}

	return array[0];
}

// eslint-disable-next-line no-unused-vars
function last(array) {
	if (!(array instanceof Array)) {
		throw new Error('function should take array as a parameter');
	}

	return array[array.length - 1];
}

// eslint-disable-next-line no-unused-vars
var chain = function (array) {

	var state = array;

	return {

		map: function (callback) {
			return chain(map(array, callback));
		},

		filter: function (callback) {
			return chain(filter(array, callback));
		},

		first: function () {
			return chain([first(array)]);
		},

		last: function () {
			return chain([last(array)]);
		},

		value: function () {
			return state;
		}



	};
};