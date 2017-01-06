'use strict';

/*global _:true*/

var splitIntoLines = function (text) {
	if (!_.isString(text)) {
		throw new Error('Invalid argument');
	}

	return text.match(/[^\n]+/g);
};

var patterns = {
	comment: {
		regex: /\/\*.*\*\//g,
		weight: 1
	},
	useStrict: {
		regex: /'use strict'/g,
		weight: 2
	},
	simpleModules: {
		regex: /const.*=.require.*;/g,
		weight: 3
	},
	alphaFlowModules: {
		regex: /const\s.*=*require\('@alphaflow.*;/g,
		weight: 4
	},
	outerModules: {
		regex: /const\s.*=*require\('\.*\/.*;/g,
		weight: 5
	},
	config: {
		regex: /const.*\=\s(?!require).*/g,
		weight: 6
	}
};

var getWeight = function (line) {
	for (let patternKey in patterns) {
		if (patterns.hasOwnProperty(patternKey)) {
			let patternData = patterns[patternKey];
			if (patternData.regex.test(line)) {
				return patternData.weight;
			}
		}
	}
};


var sortImports = function (text) {
	var lines = splitIntoLines(text);

	var tokens = lines.map(function (line) {
		return {line: line, weight: getWeight(line)};
	});
	return _.sortBy(tokens, 'weight');
};

// var tokensToString = function (tokens) {
// 	//validation
// 	//convert to string
//
// 	throw new Error('Not implemented');
// };

var tokensToString = function (array) {
	let sortedLines = _.map(array, 'line');
	return _.join(sortedLines, '\n');
};


var tokens = sortImports(samples.sampleText1);
tokensToString(tokens);