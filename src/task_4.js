'use strict';

// var splitNumberIntoDigitList = function (number) {
// 	var arrayOfDigits = [];
// 	var stringArray = number.toString().split('');
// 	for (var i = 0; i < stringArray.length; i++) {
// 		arrayOfDigits.push(parseInt(stringArray[i]));
// 	}
// 	return arrayOfDigits;
// };

// eslint-disable-next-line no-unused-vars
function splitNumberIntoDigitList (number) {
	if (typeof number !== 'number') {
		throw new Error('function should take number as a parameter');
	}
	var stringArray = number.toString().split('');
	return stringArray.map(function (a) {
		return parseInt(a);
	});
}

