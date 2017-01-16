/**
 * Created by a.parkhimchyk on 06.01.2017.
 */

module.exports = function (config) {
    config.set({
        frameworks: ['mocha'],
        browsers: ['Chrome'],
        files: [
            './node_modules/lodash/lodash.min.js',
            './node_modules/chai/chai.js',
            'https://cdn.rawgit.com/Automattic/expect.src/0.3.1/index.src',
            'src/importSorter.js',
            'src/arrayProcessingTool.js',
            'src/test_importSorter.js',
            'src/test_arrayProcessingTool.js'            
        ],
        singleRun: true
    });
};