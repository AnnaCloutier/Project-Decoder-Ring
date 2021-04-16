const expect = require("chai").expect;
const polybiusModule = require("../src/polybius");
const polybius = polybiusModule.polybius;

describe("polybius", () => {
    it("should translate letters i and j to 42 when encoding", () => {   
        const input = "I think it is invaluable information";

        const actual = polybius(input, encode = true);
        const expected = "42 4432423352 4244 4234 42331511135411211351 4233124324231144424333";
        expect(actual).to.eql(expected);
    });


    it("should translate the number 42 to '(i/j)' when decoding", () => {   
        const input = "42 4432423352 4244 4234 4233445124513444423322";

        const actual = polybius(input, encode = false);
        const expected = "(i/j) th(i/j)nk (i/j)t (i/j)s (i/j)nterest(i/j)ng";
        expect(actual).to.eql(expected);
    });


    it("should ignore capital letters", () => {   
        const input = "HAVE FUN STORMING THE CASTLE";

        const actual = polybius(input, encode = true);
        const expected = "32111551 125433 3444432423423322 443251 311134441351";
        expect(actual).to.eql(expected);
    });


    it("should ignore capital letters", () => {   
        const input = "HaVe FuN sToRmInG tHe CaStLe";

        const actual = polybius(input, encode = true);
        const expected = "32111551 125433 3444432423423322 443251 311134441351";
        expect(actual).to.eql(expected);
    });


    it("should maintain spaces in the message after encoding", () => {   
        const input = "Mercury Venus Earth Mars";

        const actual = polybius(input, encode = true);
        const expected = "23512431542445 1551335434 5111244432 23112434";
        expect(actual).to.eql(expected);
    });


    it("should maintain spaces in the message after decoding", () => {   
        const input = "42545342445124 341144542433 542411335434 33515344543351";

        const actual = polybius(input, encode = false);
        const expected = "(i/j)up(i/j)ter saturn uranus neptune";
        expect(actual).to.eql(expected);
    });
});
