// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {

  if (!alphabet || alphabet.length !== 26) {
    return false;
  };

  input = input.toLowerCase();
  alphabet = alphabet.toLowerCase();

  let inputArray = [];
    for (let i in input) {
      inputArray.push(input[i]);
    };

    const alphaArray = [];
    for (let a in alphabet) {
      alphaArray.push(alphabet[a]);
    };

    let alphabetsKey = {};

    alphabetsKey["a"] = alphabet.charAt(0);
    alphabetsKey["b"] = alphabet.charAt(1);
    alphabetsKey["c"] = alphabet.charAt(2);
    alphabetsKey["d"] = alphabet.charAt(3);
    alphabetsKey["e"] = alphabet.charAt(4);
    alphabetsKey["f"] = alphabet.charAt(5);
    alphabetsKey["g"] = alphabet.charAt(6);
    alphabetsKey["h"] = alphabet.charAt(7);
    alphabetsKey["i"] = alphabet.charAt(8);
    alphabetsKey["j"] = alphabet.charAt(9);
    alphabetsKey["k"] = alphabet.charAt(10);
    alphabetsKey["l"] = alphabet.charAt(11);
    alphabetsKey["m"] = alphabet.charAt(12);
    alphabetsKey["n"] = alphabet.charAt(13);
    alphabetsKey["o"] = alphabet.charAt(14);
    alphabetsKey["p"] = alphabet.charAt(15);
    alphabetsKey["q"] = alphabet.charAt(16);
    alphabetsKey["r"] = alphabet.charAt(17);
    alphabetsKey["s"] = alphabet.charAt(18);
    alphabetsKey["t"] = alphabet.charAt(19);
    alphabetsKey["u"] = alphabet.charAt(20);
    alphabetsKey["v"] = alphabet.charAt(21);
    alphabetsKey["w"] = alphabet.charAt(22);
    alphabetsKey["x"] = alphabet.charAt(23);
    alphabetsKey["y"] = alphabet.charAt(24);
    alphabetsKey["z"] = alphabet.charAt(25);


    for (let i = 0; i < alphaArray.length; i++) {
      for (let j = 0; j < alphaArray.length; j++) {
        if (i !== j) {
        if (alphaArray[i] === alphaArray[j]) {
          return false; 
          }; 
        };
      };
      break;
    };

//ENCODE
  if (encode === true) {

      let encodedMsg = "";

      for (let i = 0; i < inputArray.length; i++) {
          for (let [key, value] of Object.entries(alphabetsKey))
              if (inputArray[i] === alphabetsKey[key]) {
              encodedMsg += alphabetsKey[value];
            } if (inputArray[i] === " ") {
              encodedMsg += inputArray[i];
            };
          };     
    return encodedMsg;
  };

//DECODE
  if (encode !== true) {

    let decodedMsg = "";

    for (let i = 0; i < inputArray.length; i++) {
        for (let [key, value] of Object.entries(alphabetsKey))
            if (inputArray[i] === alphabetsKey[value]) {
            decodedMsg += alphabetsKey[key];
          } if (inputArray[i] === " ") {
            decodedMsg += inputArray[i];
          };
        };     
    return decodedMsg;
  };
};

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
