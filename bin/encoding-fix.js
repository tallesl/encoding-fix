#! /usr/bin/env node

var argv = require('minimisty')
  , checkArgs = require('../lib/check-args')
  , help = require('../lib/help')
  , version = require('../lib/version')

if (argv._flags.help) console.log(help)
else if (argv._flags.version) console.log(version)
else if (checkArgs(argv)) require('../lib/convert')(argv)
else process.exit(2)

