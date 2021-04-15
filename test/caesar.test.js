const expect = require("chai").expect;
const caesar = require("../src/caesar");

describe("caesar", () => {
    it("should return false if shift is not between 1 and 25", () => {   
        const shift = 26;

        const actual = caesar(input, shift, encode = true);
        const expected = false;
        expect(actual).to.be.false;
    });


    it("should ignore capital letters", () => {
        const input = "Hello World";
        const shift = 2;

        const actual = caesar(input, shift, encode = true);
        const expected = "jgnnq yqtnf"
        expect(actual).to.eql(expected);
    });


    it("should handle shifts to the right that go past the end of the alphabet at z", () => {
        const input = "Buzz off";
        const shift = 3;

        const actual = caesar(input, shift, encode = true);
        const expected = "excc rii";
        expect(actual).to.eql(expected);
    });


    it("should handle shift to the left that go past the end of the alphabet at a", () => {
        const input = "Apples are awesomesauce";
        const shift = -3;

        const actual = caesar(input, shift, encode = true);
        const expected = "xmmibp xob xtbpljbpxrzb";
        expect(actual).to.eql(expected);
    });


    it("should maintain spaces and handle nonalphabetic symbols before and after encoding", () => {
        const input = "Apples! Are! Awesome & Sauce!";
        const shift = 10;

        const actual = caesar(input, shift, encode = true);
        const expected = "kzzvoc! kbo! kgocywo & ckemo!"
        expect(actual).to.eql(expected);
    });


    it("should maintain spaces and handle nonalphabetic symbols before and after decoding", () => {
        const input = "B!rds & bees H8 the hashtag #tweetingtwitterbuzz";
        const shift = -9;

        const actual = caesar(input, shift, encode = true);
        const expected = "k!amb & knnb q8 cqn qjbqcjp #cfnncrwpcfrccnakdii"
        expect(actual).to.eql(expected);
    });
});