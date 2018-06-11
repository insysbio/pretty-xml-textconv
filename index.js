#!/usr/bin/env node

'use strict';

var pd = require('pretty-data').pd;
var fs = require('fs');

var userArgs = process.argv.slice(2);
var xmlFile = process.argv[2];
var isMinify = userArgs.indexOf('--minify');

var d = fs.readFileSync(xmlFile, 'utf8');

if (isMinify >= 0) {
    process.stdout.write(pd.xmlmin(d));
} else {
    process.stdout.write(pd.xml(d));
}

process.stdout.on('error', function (err) {
    // been piped to a process that has closed stdout. e.g. more
    if (err.code === 'EPIPE') {
        process.exit(0);
    }

    // something else, don't mask error
    process.stderr.write(JSON.stringify(err) + '\n');
    process.exit(1);
});
