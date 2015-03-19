var expect = require("chai").expect;
var pony = require("../pony.js"),
    ponyize = pony.ponyize,
    unpony = pony.unpony;

describe("ponyize", function(){
    it("returns text consisting entirely of the characters matching /[buffy]+/i", function(){
        expect(ponyize()).to.match(/[buffy]+/i);
    });
});
