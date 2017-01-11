'use strict';

var IMPORT_SORTER = (function () {

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
const baseUrl = config.APP.APP.APP.TEST.BASE_URL;
const token = require('./../util/jwt-token.js').get(['earning:post']);
const baseUrl = config.APP.TEST.BASE_URL;
const request = require('co-request');
const mock = require('../../mocks.js');

const baseUrl = config.APP.TEST.TEST.BASE.BASE_URL;`
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
		samples: samples,
		patterns: patterns,
		/**
		 * splits into lines, if line have preceding comment than save it
		 * @param text - text that is going to be split
		 * @returns {Array.<T>} - array of import statements
		 */
		splitIntoImportStatements: function (text) {
			if (!_.isString(text)) {
				throw new Error('Invalid argument');
			}
			var textWithoutComments = text.replace(/\/\/.*\n.*/g, '');
			var linesWithoutComments = textWithoutComments.match(/[^\n]+/g) || [];//TODO:.split
			var linesWithComments = text.match(/\/\/.*\n.*/g) || [];//TODO:statements with comments ,one line statements
			var lines = _.concat(linesWithComments, linesWithoutComments);

			return lines;
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