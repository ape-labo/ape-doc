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
  options = options || {}
  let or = options || '|'
  let src = fs.readFileSync(filename).toString()
  let parsed = reactDocgen.parse(src)
  for (let name of Object.keys(parsed.props || {})) {
    let prop = parsed.props[ name ]
    switch (prop.type && prop.type.name) {
      case 'union':
        prop.type = {
          name: prop.type.value.map((value) => value.name).join(or)
        }
    }
  }
  return parsed
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

