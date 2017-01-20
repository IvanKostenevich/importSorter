'use strict';
var array = ["Hello", "World", "in", "a", "frame"];
function printTextInFrame(array) {
	var currentArray = [];
	var longestElement = array.slice(0).sort(function (a, b) {//TODO:slice => reduce
		return b.length - a.length;
	})[0];
	var starString = '*'.repeat(longestElement.length + 4) + '\n';
	currentArray.push(starString);
	for (var i = 0; i < array.length; i++) {//TODO:reduce
		var missingWhitespace = ' '.repeat(longestElement.length - array[i].length);
		var string = '* ' + array[i] + missingWhitespace + ' *\n';
		currentArray.push(string);
	}
	currentArray.push(starString);
	var finalArray = currentArray.join('');
	return console.log(finalArray);
}