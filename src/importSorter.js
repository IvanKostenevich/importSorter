'use strict';

var IMPORT_SORTER = (function () {

	var patterns = {
		comment: {
			regex: /\/\*.*\*\//g,
			weight: 1
		},
		useStrict: {
			regex: /'use strict'/g,
			weight: 2
		},
		modulesWithComments: {
			regex: /\/\/.*\n.*/g,
			weight: 3
		},
		simpleModules: {
			regex: /const.*=.require(?!\(.\..?\/.*)(?!\(.@).*;/g,
			weight: 4
		},
		alphaFlowModules: {
			regex: /const\s.*=*require\('@alphaflow.*;/g,
			weight: 5
		},
		outerModules: {
			regex: /const\s.*=*require\('\.*\/.*;/g,
			weight: 6
		},
		config: {
			regex: /const.*\=\s(?!require).*/g,
			weight: 7
		}
	};

	return {
		patterns: patterns,
		/**
		 * splits into lines, if line have preceding comment than save it
		 * @param text - text that is going to be split
		 * @returns {Array.<T>} - number of import statements
		 */
		splitIntoImportStatements: function (text) {
			if (!_.isString(text)) {
				throw new Error('Invalid argument');
			}
			var textWithoutComments = text.replace(/\/\/.*\n.*/g, '');
			var oneLineStatements = textWithoutComments.match(/[^\n]+/g) || [];
			var statementsWithComments = text.match(/\/\/.*\n.*/g) || [];

			return _.concat(statementsWithComments, oneLineStatements);
		},


		getWeight: function (line) {
			for (let patternKey in patterns) {
				if (patterns.hasOwnProperty(patternKey)) {
					let patternData = patterns[patternKey];
					if (line.match(patternData.regex)) {
						return patternData.weight;
					}
				}
			}
		},


		sortImports: function (text) {
			var lines = IMPORT_SORTER.splitIntoImportStatements(text);

			var tokens = lines.map(function (line) {
				return {line: line, weight: IMPORT_SORTER.getWeight(line)};
			});
			return _.sortBy(tokens, 'weight');
		},


		tokensToString: function (array) {
			let sortedLines = _.map(array, 'line');
			return _.join(sortedLines, '\n');
		}


	};
}());