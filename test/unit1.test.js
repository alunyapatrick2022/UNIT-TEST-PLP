//test//unit1.test.js

const assert = require("assert");
const isEven = require("../src/unit1.js");

describe("isEven function", function () {
     it("should return true for even numbers", function () {
          assert.equal(isEven(4), true);
     });

     it("should return false for odd numbers", function () {
          assert.equal(isEven(5), false);
     });

     it("should throw an error if input is not a number", function () {
          assert.throws(() => isEven("a"), /input must be a number/);
     });
})