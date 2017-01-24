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

	var store = array;

	return {

		map: function (callback, thisArg) {
			var finalArray = [];

			for (var i = 0; i < store.length; i++) {
				finalArray.push(callback.call(thisArg, store[i], i, store));
			}
			store = finalArray;

			return this;
		},

		filter: function (callback, thisArg) {
			var finalArray = [];

			for (var i = 0; i < store.length; i++) {
				if (callback.call(thisArg, store[i], i, store)) {
					finalArray.push(store[i]);
				}
			}
			store = finalArray;
			
			return this;
		},

		first: function () {
			store = [store[0]];
			return this;
		},

		last: function () {
			store = [store[store.length - 1]];
			return this;
		},

		value: function () {
			return store;
		}

	};
};

