/**
 * @function parseReactComponent
 */
'use strict'

const fs = require('fs')
const reactDocgen = require('react-docgen')
const expandglob = require('expandglob')
const stringcase = require('stringcase')
const path = require('path')

/** parseReactComponent */
function parseReactComponent (filename, options) {
  let src = fs.readFileSync(filename).toString()
  return reactDocgen.parse(src)
}

Object.assign(parseReactComponent, {
  fromPattern (pattern) {
    let basename = (filename) => path.basename(filename, path.extname(filename))
    return expandglob.sync(pattern).reduce((result, filename) => {
      let ComponentName = stringcase.pascalcase(basename(filename))
      return Object.assign(result, {
        [ComponentName]: parseReactComponent(filename)
      })
    }, {})
  }
})

module.exports = parseReactComponent

