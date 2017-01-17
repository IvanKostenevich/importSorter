
// eslint-disable-next-line no-unused-vars
function add() {
	if (arguments.length === 0) {
		throw new Error('you should pass the arguments');
	}else if (arguments.length === 1) {
		var sum = arguments[0];

		var addAndRepeat = function () {
			if (arguments[0]) {
				sum += arguments[0];
				return addAndRepeat;
			} else {
				return sum;
			}
		};

		addAndRepeat.toString = function () {
			return sum;
		};

		return addAndRepeat;
	} else if (arguments.length > 1) {
		var total = 0;
		for (var i = 0; i < arguments.length; i++) {
			total += arguments[i];
		}
		return total;
	}
}

