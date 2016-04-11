/**
 * Extract comments from a file.
 * @function commentsInFile
 * @param {string} filename - Filename to read.
 * @returns {Object[]}
 */
"use strict";

const commentParser = require('comment-parser'),
    fs = require('fs');

/** @lends commentsInFile */
function commentsInFile(filename) {
    let comments = commentParser(
        fs.readFileSync(filename).toString()
    );
    return comments.map(comment => commentsInFile.parseComment(comment));
}
Object.assign(
    commentsInFile, {
        parseComment(comment){
            let tags = comment.tags || [];
            return tags.reduce((parsed, tag) => {
                let name = tag.tag;
                delete tag.tag;
                return Object.assign(parsed, {
                    [name]: [].concat(parsed.name || [], tag)
                })
            }, {
                line: comment.line,
                description: comment.description
            });
        }
    }
);

module.exports = commentsInFile;
