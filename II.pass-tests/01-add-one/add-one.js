module.exports = function(numbers) {
  var newArray = numbers.map(num => {
    return num + 1;
  });
  return newArray
}