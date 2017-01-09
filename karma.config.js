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
            'https://cdn.rawgit.com/Automattic/expect.js/0.3.1/index.js',
            'js/sort-imports.js',
            'js/test.js'
        ],
        singleRun: true
    });
};