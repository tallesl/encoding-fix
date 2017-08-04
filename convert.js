const fs = require('fs')
const iconv = require('iconv-lite')
const recursiveFiles = require('recursive-files')

module.exports = (args) => {
  args._.forEach((path) => {
    if (fs.lstatSync(path).isDirectory()) {
      recursiveFiles(path, { ext: args.ext }, (err, filepath) => {
        if (err) throw err
        convert(filepath, args.from, args.to, args.verbose)
      })
    } else {
      convert(path, args.from, args.to, args.verbose)
    }
  })
}

function convert (filepath, from, to, verbose) {
  fs.readFile(filepath, (err, buffer) => {
    if (err) throw err

    const decoded = iconv.decode(buffer, from)
    const encoded = iconv.encode(decoded, to)

    fs.writeFile(filepath, encoded, (err) => {
      if (err) throw err
      else if (verbose) console.log(`Converted "${filepath}".`)
    })
  })
}
