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
    return comments.map(comment => commentsInFile._parseComment(comment));
}
Object.assign(
    commentsInFile, {
        _parseComment(comment){
            let tags = comment.tags || [];
            return tags.reduce((parsed, tag) => {
                let name = tag.tag;
                delete tag.tag;
                return Object.assign(parsed, {
                    [name]: [].concat(parsed[name] || []).concat(tag)
                })
            }, {
                line: comment.line,
                description: comment.description
            });
        },
        describeFunction(comment){
            return {
                name: comment.function[0].name,
                description: comment.description.replace(/^\-\s+/, ''),
                params: comment.param.map(param => ({
                    name: param.name,
                    type: param.type,
                    description: param.description.replace(/^\-\s+/, ''),
                    default: param.default
                })),
                get signature(){
                    let name  = this.name;
                    let args = this.params && this.params
                            .map(param => param.name && param.name.split(/\./g).shift())
                            .filter(name => !!name)
                            .reduce((args, name) =>
                                    !!~args.indexOf(name) ? args : args.concat(name),
                                []);
                    let signature = `${name}(${args && args.join(', ')})`;
                    let returns = comment.returns && comment.returns[0];
                    if (returns && returns.type) {
                        signature = `${signature} -> ${returns.type}`
                    }
                    return signature;
                }
            }
        }
    }
);

module.exports = commentsInFile;
