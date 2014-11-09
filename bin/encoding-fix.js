#! /usr/bin/env node

var argv = require('minimist')(process.argv.slice(2))
  , checkArgs = require('../lib/check-args')
  , version = require('../package.json').version

var help = '\
Changes the encoding of the given file or directory. \
Works recursively if a directory is specified.\n\
Use "--from" and "--to" to specify the encoding. For supported encodings head to https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings.'

if (argv.help) console.log(help)
else if (argv.version) console.log(version)
else if (checkArgs(argv)) require('../lib/convert')(argv)
else process.exit(2)
