import assert from "node:assert";
import Ul from "ul";
import Abs from "../lib/index.js";
const { it } = global;

it("should support absolute inputs", function (cb) {
    assert.equal(Abs("/foo"), "/foo");
    cb();
});

it("should support relative inputs", function (cb) {
    assert.equal(Abs("foo"), process.cwd() + "/foo");
    cb();
});

it("should support home files/dirs", function (cb) {
    assert.equal(Abs("~/foo"), Ul.home() + "/foo");
    cb();
});
