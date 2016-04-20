/**
 * Test case for parseReactComponent.
 * Runs with mocha.
 */
'use strict'

const parseReactComponent = require('../lib/parse_react_component.js')
const assert = require('assert')

describe('parse-react-component', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Parse react component', (done) => {
    let filename = require.resolve('apeman-react-button/lib/ap_button.jsx')
    let info = parseReactComponent(filename)
    assert.ok(info)
    done()
  })

  it('Parse react component from pattern', (done) => {
    let pattern = require.resolve('apeman-react-button/lib/ap_button.jsx')
      .replace(/ap_button\.jsx$/, '*.jsx')
    let info = parseReactComponent.fromPattern(pattern)
    assert.ok(info)
    console.log(JSON.stringify(info, null, 4))
    done()
  })
})

/* global describe, before, after, it */
