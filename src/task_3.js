'use strict';

// eslint-disable-next-line no-unused-vars
function shuffleArray(array) {
	if (!(array instanceof Array)) {
		throw new Error('function should take array as a parameter');
	}
	for (var i = 0; i < array.length; i++) {
		var j = Math.floor(Math.random() * array.length);//((array.length - 1) - i + 1) + i )
		var temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
	return array;
}