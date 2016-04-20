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
})

/* global describe, before, after, it */
