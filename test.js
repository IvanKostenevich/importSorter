'use strict';

describe('splitting into lines function', function () {
	it('should be a function', function () {
		expect(splitIntoLines).to.be.a.Function;
		/*throw Error('Hitrushka');*/
	});

	it('should return an array', function () {
		expect(splitIntoLines(samples.sampleText1)).to.be.an.Array;
	});

	//should throw if empty string passed
	
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
	
	//придумать 3 строки, отсортировать в голове
	//потом отсортировать твоей функцией
	//из головы должно равняться тому что получилось
});