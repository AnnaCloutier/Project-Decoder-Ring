// Please refrain from tampering with the setup code provided here
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {

    if (!shift || shift > 25 || shift < -25 || shift === 0) {
      return false;
    };

    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    input = input.toLowerCase();

  //ENCODE 
    if (encode === true) {
    
      let encodeMsg = "";

      for (let i = 0; i < input.length; i++) {

        let index = alphabetString.indexOf(input[i]);

          if (index === -1) {
            encodeMsg += input[i];
            continue;
          };

        index += shift;

          if (index > alphabetString.length) {
            index -= alphabetString.length;
          } else if (index < 0) {
            index += alphabetString.length;
          };
          encodeMsg += alphabetString[index]; 
        };
      return encodeMsg;
      };

    //DECODE
    if (encode !== true) {

      let decodeMsg = "";
      
      for (let i = 0; i < input.length; i++) {
        let index = alphabetString.indexOf(input[i])

          if (index === -1) {
            decodeMsg += input[i];
            continue;
          };

        index -= shift;

          if (index < 0) {
            index += alphabetString.length;
          };

          if (index > 25) {
            index -= alphabetString.length
          };
          decodeMsg += alphabetString[index];
        };
      return decodeMsg;
      };
  };

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
