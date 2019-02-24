// example
var largestNumber = require("./largest-number.js");
test("find the largest number",function(){
    //arrange
    const input = [3, 21, 88, 4, 36];
    const expectation=88;
    //act
    const result = largestNumber(input);
    //assert
    expect(result).toEqual(expectation)
})
// input: [3, 21, 88, 4, 36];
// expected: 88;

// also test that the original array hasn't changed