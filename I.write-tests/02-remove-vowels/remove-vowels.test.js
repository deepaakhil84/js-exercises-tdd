const removeVowels = require("./remove-vowels");

test("remove vowels from word", function() {
  // Arrange
  const vowels = "samuel";
  const expectation = "s m  l";

  // Act
  const result = removeVowels(vowels);

  // Assert
  expect(result).toEqual(expectation);
});
// npm test I.write - tests / 02 - remove - vowels / remove - vowels.test.js