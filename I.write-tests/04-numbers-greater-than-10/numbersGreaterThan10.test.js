var largerThanTen = require('./numbersGreaterThan10');

test('Get numbers greater than 10', function () {
//arrange
    const number = [4, 10, 32, 9, 21];
    const expectation = [32, 21];
    //act
    const result = largerThanTen(number);
    //assert
    expect(result).toEqual(expectation);
});


// input: [4, 10, 32, 9, 21];
// expected output: [32, 21];
