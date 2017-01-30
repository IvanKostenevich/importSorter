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

	var adapt = function(func) {
		return function (...args) {
			args.unshift(array);
			return chain(func.apply(null, args));
		};
	};

	return {

		map: adapt(map),
		filter: adapt(filter),
		first: adapt(first),
		last: adapt(last),
		value: function () {
			return state;
		}
	};
};