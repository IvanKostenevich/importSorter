'use strict';

export default(function importSorterModule () {
// eslint-disable-next-line no-unused-vars
	var samples = {
		sampleText1: `/*eslint require-yield:0*/
'use strict';
const config = require('../../config.js');
// eslint-disable-next-line no-unused-vars
const coMocha = require('co-mocha');
// eslint-disable-next-line no-unused-vars
const should = require('chai').should();
// eslint-disable-next-line no-unused-vars
const _ = require('lodash');
const EventLogger = require('@alphaflow/sc-eventstore/lib/event-logger.js');
const constants = require('@alphaflow/sc-common').constants;
const HTTPStatus = require('http-status');
const baseUrl = config.AsdsdasdPP.TEST.BASE_URL;
const token = require('./../util/jwt-token.js').get(['earning:post']);
const baseUrl = config.APP.TEST.BASE_URL;
const request = require('co-request');
const mock = require('../../mocks.js');

const baseUrl = config.APP.TEST.dfsdfsdfsfBASE_URL;`
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
	return {
		splitIntoLines: function (text) {
			if (!_.isString(text)) {
				throw new Error('Invalid argument');
			}

			return text.match(/[^\n]+/g);
		},


		getWeight: function (line) {
			for (let patternKey in patterns) {
				if (patterns.hasOwnProperty(patternKey)) {
					let patternData = patterns[patternKey];
					if (patternData.regex.test(line)) {
						return patternData.weight;
					}
				}
			}
		},


		sortImports: function (text) {
			var lines = importSorterModule.splitIntoLines(text);

			var tokens = lines.map(function (line) {
				return {line: line, weight: importSorterModule.getWeight(line)};
			});
			return _.sortBy(tokens, 'weight');
		},


		tokensToString: function (array) {
			let sortedLines = _.map(array, 'line');
			return _.join(sortedLines, '\n');
		}


// var tokens = sortImports(samples.sampleText1);
// tokensToString(tokens);
	};
}());