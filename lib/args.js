var argv = require('minimist')(process.argv.slice(2))
  , iconv = require('iconv-lite')

module.exports = function () {
  var ok = true

  if (!argv._.length) {
    console.error('No file/directory was specified!')
    ok = false
  }

  if (!argv.from) {
    console.error('Specify current encoding with --from')
    ok = false
  } else if (!iconv.encodingExists(argv.from)) {
    console.error('Encoding not recognized: ' + argv.from + '.')
    ok = false
  }

  if (!argv.to) {
    console.error('Specify the new encoding with --to')
    ok = false
  } else if (!iconv.encodingExists(argv.to)) {
    console.error('Encoding not recognized: ' + argv.to + '.')
    ok = false
  }

  if (argv.ext && argv.ext[0] !== '.') argv.ext = '.' + argv.ext

  if (ok) return argv
}