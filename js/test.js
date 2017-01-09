'use strict';

import importSorterModule from 'sort-imports';

describe('splitting into lines function', function () {
	it('should be a function', function () {
		expect(importSorterModule.splitIntoLines).to.be.a.Function;
		/*throw Error('Hitrushka');*/
	});

	it('should return an array', function () {
		expect(importSorterModule.splitIntoLines(importSorterModule.samples.sampleText1)).to.be.an.Array;
	});
	it('check if string is not empty', function () {
		var splittedLines = importSorterModule.splitIntoLines(importSorterModule.samples.sampleText1);
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
		var arrayOfLines = importSorterModule.splitIntoLines(randomText);
		chai.assert.equal(arrayOfLines.length, expectedLinesNumber, 'numbers are equal');
	});
});

describe('calculating line weight function', function () {
	it('should be a function', function () {
		expect(importSorterModule.getWeight).to.be.a.Function;
	});
	it('should return a number', function () {
		expect(importSorterModule.getWeight()).to.be.a.Number;
	});

	//ignore trailing spaces e.g. "     'use strict';     "
	//same with tabs '	'


});

describe('sorting function', function () {
	it('should be a function', function () {
		expect(importSorterModule.sortImports).to.be.a.Function;
	});
	it('should return an array', function () {
		expect(importSorterModule.sortImports(importSorterModule.samples.sampleText1)).to.be.an.Array;
	});
	it('should sort as expected', function () {
		const testLines = 'const squirrel = require(\'belka\');\n/*eslint is a great tool:0*/\n\'use strict\';';
		const expected = '/*eslint is a great tool:0*/\n\'use strict\';\nconst squirrel = require(\'belka\');';
		var tokens = importSorterModule.sortImports(testLines);
		expect(importSorterModule.tokensToString(tokens)).to.be.eql(expected);
	});

});