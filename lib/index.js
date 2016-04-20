/**
 * Doc parser of ape.
 * @module ape-doc
 */

'use strict'

module.exports = {
  get commentsInFile () { return require('./comments_in_file') },
  get parseReactComponent () { return require('./parse_react_component') }
}
