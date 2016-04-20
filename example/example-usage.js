'use strict';

const apeDoc = require('ape-doc');

// Javascript file path to read.
let FILE_PATH = require.resolve('ape-doc/lib/comments_in_file');
let comments = apeDoc(
  FILE_PATH
)
assert.deepEqual(comments, [
  {
    'line': 0,
    'description': 'Extract comments from a file.',
    'function': [
      {
        'name': 'commentsInFile',
        'optional': false,
        'type': '',
        'description': '',
        'line': 2,
        'source': '@function commentsInFile'
      }
    ],
    'param': [
      {
        'type': 'string',
        'name': 'filename',
        'optional': false,
        'description': '- Filename to read.',
        'line': 3,
        'source': '@param {string} filename - Filename to read.'
      }
    ],
    'returns': [
      {
        'type': 'Object[]',
        'name': '',
        'optional': false,
        'description': '',
        'line': 4,
        'source': '@returns {Object[]}'
      }
    ]
  },
  {
    'line': 11,
    'description': '',
    'lends': [
      {
        'name': 'commentsInFile',
        'optional': false,
        'type': '',
        'description': '',
        'line': 11,
        'source': '@lends commentsInFile'
      }
    ]
  }
])
