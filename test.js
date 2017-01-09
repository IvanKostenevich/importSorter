'use strict';

describe('splitting into lines function', function () {
	it('should be a function', function () {
		expect(splitIntoLines).to.be.a.Function;
		/*throw Error('Hitrushka');*/
	});

	it('should return an array', function () {
		expect(splitIntoLines(samples.sampleText1)).to.be.an.Array;
	});
	it('check if string is not empty', function () {
		var splittedLines = splitIntoLines(samples.emptyStringSample);
		if (splittedLines === null || splittedLines.length === 0  ){
			throw new Error ('String should not be empty!');
		}
	});
	
	//it should return an array with n items if n-line stirng passed
	// n = random()
	// st = string containing n lines
	// array = split(st) should have length n
});

describe('calculating line weight function', function () {
	it('should be a function', function () {
		expect(getWeight).to.be.a.Function;
	});
	it('should return a number', function () {
		expect(getWeight()).to.be.a.Number;
	});
	
	//ignore trailing spaces e.g. "     'use strict';     "
	//same with tabs '	'
		
	
	
	
});

describe('sorting function', function () {
	it('should be a function',function () {
		expect(sortImports).to.be.a.Function;
	});
	it('should return an array', function () {
		expect(sortImports(samples.sampleText1)).to.be.an.Array;
	});
	it('should sort as expected', function () {
		const testLines = `const squirrel = require('belka');\n/*eslint is a great tool:0*/\n'use strict';`;
		const expected = `/*eslint is a great tool:0*/\n'use strict';\nconst squirrel = require('belka');`;
		var tokens = sortImports(testLines);
		expect(tokensToString(tokens)).to.be.eql(expected);
	});

});