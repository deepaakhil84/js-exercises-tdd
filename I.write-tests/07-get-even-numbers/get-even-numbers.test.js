const evenNumber = require("./get-even-numbers");
test("print list of even numbers", function() {
  const input = [22, 13, 73, 82, 4];
  const expectation = [22, 82, 4];
  const result = evenNumber(input);
  expect(result).toEqual(expectation);
});

// example
// input: [22, 13, 73, 82, 4];
// expected: [22, 82, 4];
