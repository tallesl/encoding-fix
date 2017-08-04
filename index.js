#! /usr/bin/env node

const argv = require('minimisty')
const checkArgs = require('./check-args')
const convert = require('./convert')

if (argv._flags.help) displayHelp()
else if (argv._flags.version) displayVersion()
else if (checkArgs(argv)) convert(argv)
else process.exit(2)

function displayHelp () {
  console.log('Changes the encoding of the given file or directory.')
  console.log('Works recursively if a directory is specified.')
  console.log('Use "--from" and "--to" to specify the encoding.')
  console.log('For supported encodings head to https://github.com/ashtuchkin/iconv-lite/wiki/Supported-Encodings.')
}

function displayVersion () {
  console.log(require('./package').version)
}
