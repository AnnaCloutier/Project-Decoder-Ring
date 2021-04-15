const expect = require("chai").expect;
const caesar = require("../src/substitution");

describe("substitution", () => {
    it("should return false the given alphabet is not exactly 26 characters in length", () => {   
        const alphabet = "qwertyuiopasdf";

        const actual = substitution(input, alphabet, encode = true);
        const expected = false;
        expect(actual).to.be.false;
    });


    it("should return false the given alphabet contains duplicate characters", () => {   
        const alphabet = "qqwweerrttyyuuiiooppxxssdd";

        const actual = substitution(input, alphabet, encode = true);
        const expected = false;
        expect(actual).to.be.false;
    });


    it("should correctly encode the input message with the given alphabet", () => {   
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const input = "Sakes alive!"

        const actual = substitution(input, alphabet, encode = true);
        const expected = "lqatl qsoct";
        expect(actual).to.eql(expacted);
    });


    it("should correctly decode the input message with the given alphabet", () => {   
        const alphabet = "qwertyuiopasdfghjklzxcvbnm";
        const input = "lqatl qsoct"

        const actual = substitution(input, alphabet, encode = false);
        const expected = "sakes alive";
        expect(actual).to.eql(expacted);
    });


    it("should maintain spaces included in the input message when encoding", () => {   
        const alphabet = "polikmujnyhbtgvrfcedxwszaq";
        const input = "Swiss cheese has many spaces"

        const actual = substitution(input, alphabet, encode = true);
        const expected = "esnee ljkkek jpe tpga erplke";
        expect(actual).to.eql(expacted);
    });


    it("should maintain spaces included in the input message when decoding", () => {   
        const alphabet = "polikmujnyhbtgvrfcedxwszaq";
        const input = "esnee ljkkek jpe tpga erplke"

        const actual = substitution(input, alphabet, encode = false);
        const expected = "swiss cheese has many spaces";
        expect(actual).to.eql(expacted);
    });


    it("should ignore capital letters", () => {   
        const alphabet = "ythgbvurjfnceidkxmowlszpqa";
        const input = "pLeasE EXCUse tHe meSS"

        const actual = substitution(input, alphabet, encode = true);
        const expected = "kcbyob bphlob wrb eboo";
        expect(actual).to.eql(expacted);
    });
});
