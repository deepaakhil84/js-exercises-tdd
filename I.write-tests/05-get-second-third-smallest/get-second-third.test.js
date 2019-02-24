// example
var getSecondThird = require("./get-second-third.js");
test("print second and third smallest", function() {
  //arrange
  const input = [90, 5, 11, 8, 6];
  const expectation = [6, 8];
  //act
  const result = getSecondThird(input);
  //assert
  expect(result).toEqual(expectation);
});

// input = [90, 5, 11, 8, 6];
// expected output = [6, 8];

// also test that the original array has not changed
