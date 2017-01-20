'use strict';

// eslint-disable-next-line no-unused-vars
function printTextInFrame(array) {
	var finalArray = [];
	var longestElement = array.reduce(function (a, b) {
		return a.length > b.length ? a : b;
	});

	var starString = '*'.repeat(longestElement.length + 4) + '\n';
	finalArray.push(starString);

	for (var i = 0; i < array.length; i++) {
		var missingWhitespace = ' '.repeat(longestElement.length - array[i].length);
		var string = '* ' + array[i] + missingWhitespace + ' *\n';
		finalArray.push(string);
	}

	finalArray.push(starString);

	// eslint-disable-next-line no-console
	return console.log(finalArray.join(''));
}