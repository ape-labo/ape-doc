/**
 * Doc parser of ape.
 * @module ape-doc
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get commentsInFile () { return d(require('./comments_in_file')) },
  get parseReactComponent () { return d(require('./parse_react_component')) }
}
