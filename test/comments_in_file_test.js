/**
 * Test case for commentsInFile.
 * Runs with mocha.
 */
'use strict'

const commentsInFile = require('../lib/comments_in_file.js');
const assert = require('assert');

describe('comments-in-file', () => {
  before((done) => {
    done()
  })

  after((done) => {
    done()
  })

  it('Comments in file', (done) => {
    let comments = commentsInFile(
      require.resolve('../lib/comments_in_file')
    )
    console.log(JSON.stringify(comments, null, 2))
    done()
  })
})

/* global describe, before, after, it */
