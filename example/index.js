// Dependencies
var Abs = require("abs");

console.log(Abs("/foo"));
// => "/foo"

console.log(Abs("foo"));
// => "/path/to/where/you/are/foo"

console.log(Abs("~/foo"));
// => "/home/username/foo"

