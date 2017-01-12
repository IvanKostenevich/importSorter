'use strict';

// eslint-disable-next-line no-unused-vars
var ARRAY_PROCESSING_TOOL = (function () {

	var arraySample = [-1, 2, 3, 4, -9, 5];

	return {
		arraySample: arraySample,

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
			return Math.max.apply(null, array);
		},
		getMediumValue: function (array) {
			array.sort(function (a, b) {
				return a - b;
			});
			var median = function () {
				if (array.length % 2 === 0) {
					return (array[array.length / 2] + array[array.length / 2 - 1]) / 2;
				} else {
					return array[Math.floor(array.length / 2)];
				}
			};
			return median();
		},
		getMinValue: function (array) {
			return Math.min.apply(null, array);

		}
	};
}());
