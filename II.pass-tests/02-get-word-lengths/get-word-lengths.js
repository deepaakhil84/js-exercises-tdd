var getWordLengths = function(someWords) {
  var wordLength = someWords.map(word => {
    return word.length;
  });
  return wordLength;
};

module.exports = getWordLengths;
