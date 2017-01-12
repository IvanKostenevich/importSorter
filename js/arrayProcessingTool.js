'use strict';

// eslint-disable-next-line no-unused-vars
var ARRAY_PROCESSING_TOOL = (function () {

	return {

		getMaxSubSum: function (array) {

			var maxSum = 0;
			for (var i = 0; i < array.length; i++) {
				var currentSum = 0;
				for (var j = i; j < array.length; j++) {
					currentSum = currentSum + array[j];
					maxSum = Math.max(currentSum, maxSum);
				}
			}

			return maxSum;

		},
		getMaxValue: function (array) {
			if (array instanceof Array) {
				var maxValue = 0;
				for (var i = 1; i < array.length; i++) {
					if (array[i] >= maxValue) {//todo max= array[0],do i need '=' in '>='?
						maxValue = array[i];
					}
				}

				return maxValue;
			} else {
				throw new Error('function should take array as a parameter');//todo error up,if empty error,
			}
		},
		getMedianValue: function (array) {
			array.sort(function (a, b) {
				return a - b;
			});
			if (array.length % 2 === 0) {
				return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
			} else {
				var middleElement = Math.floor(array.length / 2);
				return array[middleElement];
			}
		},
		getMinValue: function (array) {
			if (array instanceof Array) {
				var minValue = 0;
				for (var i = 0; i < array.length; i++) {
					if (array[i] <= minValue) {
						minValue = array[i];
					}
				}

				return minValue;
			} else {
				throw new Error('function should take array as a parameter');
			}

		}
	};
}());
