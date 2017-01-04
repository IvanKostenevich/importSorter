"use strict";

var defaultText = `/*eslint require-yield:0*/
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

const baseUrl = config.APP.TEST.dfsdfsdfsfBASE_URL;`;

var splitIntoLines = function (text) {
    if (!_.isString(text)) {
        throw new Error('Invalid argument')
    }

    return text.match(/[^\n]+/g);
};

var patterns = {
    comment: {
        regex: /\/\*.*\*\//g,
        weight: 1
    }
}

//     useStrict
//     ...
// }
//
// var commentPattern = ;

var abc = 123;

var useStrictPattern = /'use strict'/g;
var simpleModulesPattern = /const.*=.require.*;/g;
var alphaFlowModulesPattern = /const\s.*=*require\('@alphaflow.*;/g;
var outerModulesPattern = /const\s.*=*require\('\.*\/.*;/g;
var configPattern = /const.*\=\s(?!require).*/g;

var getWeight = function (data) {
    if (commentPattern.test(data)) {
        return 1;
    }
    if (useStrictPattern.test(data)) {
        return 2;
    }
    if (simpleModulesPattern.test(data)) {
        return 3;
    }
    if (alphaFlowModulesPattern.test(data)) {
        return 4;
    }
    if (outerModulesPattern.test(data)) {
        return 5;
    }
    if (configPattern.test(data)) {
        return 6;
    }
};

var sortImports = function (text) {
    var lines = splitIntoLines(text);

    var tokens = lines.map(function (line) {
        return {line: line, weight: getWeight(line)};
    });
    return _.sortBy(tokens, 'weight');
};

sortImports(defaultText);