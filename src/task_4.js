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
var splitNumberIntoDigitList = function (number) {
	var stringArray = number.toString().split('');
	return stringArray.map(function (a) {
		return parseInt(a);
	});
};

