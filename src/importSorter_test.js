'use strict';

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

describe('splitting into lines function', function () {
	it('should be a function', function () {
		expect(IMPORT_SORTER.splitIntoImportStatements).to.be.a.Function;
		/*throw Error('Hitrushka');*/
	});

	it('should return an number', function () {
		expect(IMPORT_SORTER.splitIntoImportStatements(samples.sampleText1)).to.be.an.Array;
	});
	it('check if string is not empty', function () {
		var splittedLines = IMPORT_SORTER.splitIntoImportStatements(samples.sampleText1);
		if (splittedLines === null || splittedLines.length === 0) {
			throw new Error('String should not be empty!');
		}
	});
	it('should check if function is splitting on right number of lines', function () {
		var generateRandomText = function (linesNumber) {
			var randomString = Math.random().toString(36) + '\n';

			return randomString.repeat(linesNumber);
		};

		var expectedLinesNumber = _.random(1, 9);
		var randomText = generateRandomText(expectedLinesNumber);
		var arrayOfLines = IMPORT_SORTER.splitIntoImportStatements(randomText);
		chai.assert.equal(arrayOfLines.length, expectedLinesNumber, 'numbers are equal');
	});
});

describe('calculating line weight function', function () {
	it('should be a function', function () {
		expect(IMPORT_SORTER.getWeight).to.be.a.Function;
	});
	it('should return a number', function () {
		expect(IMPORT_SORTER.getWeight(samples.sampleText1)).to.be.a.Number;
	});
});

describe('sorting function', function () {
	it('should be a function', function () {
		expect(IMPORT_SORTER.sortImports).to.be.a.Function;
	});
	it('should return an number', function () {
		expect(IMPORT_SORTER.sortImports(samples.sampleText1)).to.be.an.Array;
	});
	it('should sort as expected', function () {
		const testLines =
			'const squirrel = require(\'belka\');' +
			'\n/*eslint is a great tool:0*/' +
			'\n\'use strict\';';

		const expected =
			'/*eslint is a great tool:0*/' +
			'\n\'use strict\';' +
			'\nconst squirrel = require(\'belka\');';

		var tokens = IMPORT_SORTER.sortImports(testLines);
		expect(IMPORT_SORTER.tokensToString(tokens)).to.be.eql(expected);
	});

});