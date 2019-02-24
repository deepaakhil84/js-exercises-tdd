var removeVowelsInArray = require("./remove-vowels-in-array");
test("remove vowels from all words in array", function() {
  // Arrange
  const input = ["Irina", "Etza", "Daniel"];
  const expectation = ["rn", "tz", "Dnl"];

  // Act
  const result = removeVowelsInArray(input);

  // Assert
  expect(result).toEqual(expectation);
});

// example
// input: ["Irina", "Etza", "Daniel"]
// expected output: ["rn", "tz", "dnl"]
//npm test I write-tests/03-remove-vowels-from-array/remove-vowels-in-array/remove-vowels-in-arraay.test.js
