var fs = require('fs')
  , iconv = require('iconv-lite')
  , recursiveFiles = require('recursive-files')
  
module.exports = function (args) {

  args._.forEach(function (path) {
    if (fs.lstatSync(path).isDirectory()) {

      recursiveFiles(path, { ext: args.ext }, function (err, filepath) {
        convert(filepath, args.from, args.to, args.verbose)
      })

    } else convert(path, args.from, args.to, args.verbose)

  })

}

function convert (filepath, from, to, verbose) {
  fs.readFile(filepath, function (err, buffer) {
    if (err) throw err

    var decoded = iconv.decode(buffer, from)
      , encoded = iconv.encode(decoded, to)

    fs.writeFile(filepath, encoded, function (err) {
      if (err) throw err
      else if (verbose) console.log('Converted "' + filepath + '"')
    })
  })
}

