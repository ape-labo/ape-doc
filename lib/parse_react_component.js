/**
 * @function parseReactComponent
 */
'use strict'

const fs = require('fs')
const reactDocgen = require('react-docgen')

/** parseReactComponent */
function parseReactComponent (filename, options) {
  let src = fs.readFileSync(filename).toString()
  return reactDocgen.parse(src)
}

module.exports = parseReactComponent

