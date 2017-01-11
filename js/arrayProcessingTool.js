'use strict';

// eslint-disable-next-line no-unused-vars
var ARRAY_PROCESSING_TOOL = (function () {

	var arraySample = [-1, 2, 3, -9];

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
		}
	};
}());
