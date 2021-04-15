// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {

    input = input.toLowerCase();

    //ENCODE
    if (encode === true) {
  
      const polybiusEncodeKey = [
        {number: 11, letter: "a"},
        {number: 21, letter: "b"},
        {number: 31, letter: "c"},
        {number: 41, letter: "d"},
        {number: 51, letter: "e"},
        {number: 12, letter: "f"},
        {number: 22, letter: "g"},
        {number: 32, letter: "h"},
        {number: 42, letter: "i"},
        {number: 42, letter: "j"},
        {number: 52, letter: "k"},
        {number: 13, letter: "l"},
        {number: 23, letter: "m"},
        {number: 33, letter: "n"},
        {number: 43, letter: "o"},
        {number: 53, letter: "p"},
        {number: 14, letter: "q"},
        {number: 24, letter: "r"},
        {number: 34, letter: "s"},
        {number: 44, letter: "t"},
        {number: 54, letter: "u"},
        {number: 15, letter: "v"},
        {number: 25, letter: "w"},
        {number: 35, letter: "x"},
        {number: 45, letter: "y"},
        {number: 55, letter: "z"},
      ];

      let encodeMsg = "";
      
      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          encodeMsg += input[i];
        };
        for (let j = 0; j < polybiusEncodeKey.length; j++) {
          if (input[i] === polybiusEncodeKey[j].letter) {
            encodeMsg += polybiusEncodeKey[j].number;
          };
        };
      };
      return encodeMsg;
    };

    //DECODE
    if (encode !== true) {

      let inputSplitJoin = input.split(" ").join(""); 
      let inputSplit = inputSplitJoin.split("");
      let inputLength = (inputSplit.length);

      if (inputLength % 2 !== 0) {
        return false;
      };

      const polybiusDecodeKey = [
        {number: 11, letter: "a"},
        {number: 21, letter: "b"},
        {number: 31, letter: "c"},
        {number: 41, letter: "d"},
        {number: 51, letter: "e"},
        {number: 12, letter: "f"},
        {number: 22, letter: "g"},
        {number: 32, letter: "h"},
        {number: 42, letter: "(i/j)"},
        {number: 52, letter: "k"},
        {number: 13, letter: "l"},
        {number: 23, letter: "m"},
        {number: 33, letter: "n"},
        {number: 43, letter: "o"},
        {number: 53, letter: "p"},
        {number: 14, letter: "q"},
        {number: 24, letter: "r"},
        {number: 34, letter: "s"},
        {number: 44, letter: "t"},
        {number: 54, letter: "u"},
        {number: 15, letter: "v"},
        {number: 25, letter: "w"},
        {number: 35, letter: "x"},
        {number: 45, letter: "y"},
        {number: 55, letter: "z"},
        {number: 00, letter: " "},
      ];

      let newInput = "";

      for (let i = 0; i < input.length; i++) {
        if (input[i] === " ") {
          newInput += "00";
        } else {
          newInput += input[i];
        };
      };

      let decodeMsgArray = [];
      
      for (let i = 0; i < newInput.length; i+=2) {
        decodeMsgArray.push(newInput.slice(i, i + 2));
      };

      let convertedMsg = "";

      for (let i = 0; i < decodeMsgArray.length; i++) {
        if (decodeMsgArray[i] == " ") {
          decodeMsgArray[i] = 00;
        };
        for (let j = 0; j < polybiusDecodeKey.length; j++) {
          if (parseInt(decodeMsgArray[i]) == polybiusDecodeKey[j].number) {
            convertedMsg += polybiusDecodeKey[j].letter;
          };
        };
      };
      return convertedMsg;
    };
  };

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
