import path from "path";
import ul from "ul";

/**
 * abs
 * Computes the absolute path of an input.
 * @name abs
 * @function
 * @param {string} input The input path (if not provided, the current
 * working directory will be returned).
 * @returns {string} The absolute path.
 */
function abs(input) {
    if (!input) { return process.cwd(); }
    if (input.charAt(0) === "/") { return input; }
    if (input.charAt(0) === "~" && input.charAt(1) === "/") {
        input = ul.HOME_DIR + input.substr(1);
    }
    return path.resolve(input);
}

export default abs;
