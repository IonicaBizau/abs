"use strict";

const Path = require("path")
    , Ul = require("ul")
    ;

/**
 * abs
 * Computes the absolute path of an input.
 *
 * @name abs
 * @function
 * @param {String} input The input path (if not provided, the current
 * working directory will be returned).
 * @return {String} The absolute path.
 */
function abs(input) {
    if (!input) { return process.cwd(); }
    if (input.charAt(0) === "/") { return input; }
    if (input.charAt(0) === "~" && input.charAt(1) === "/") {
        input = Ul.HOME_DIR + input.substr(1);
    }
    return Path.resolve(input);
}

module.exports = abs;
