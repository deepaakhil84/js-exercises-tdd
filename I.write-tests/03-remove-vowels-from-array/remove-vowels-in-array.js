var removeVowels = require("../02-remove-vowels/remove-vowels");

function removeVowelsForWords(words) {
  var result = words.map(function(word) {
    //return removeVowels(word)
    return word.replace(/[aeiou]/gi, "");
  });

  return result;
}

module.exports = removeVowelsForWords;

/*
    input: ["Irina", "Etza", "Daniel"]
    expected output: ["rn", "tz", "dnl"]

    var strings = ["bongo drums", "guitar", "flute", "double bass", "xylophone","piano"];
var string = strings.map(x => x.replace(/[aeiou]/g, ''));
console.log(string);

*/
