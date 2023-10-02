"use strict";
const os = require("os");
const path = require("path");

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
        const homeDir = os.homedir();
        input = path.join(homeDir, input.substring(2));
    }
    
    return path.resolve(input);
}

module.exports = abs;
