var add = 0;
function addNumbers(numbers) {
  for (var i = 0; i < numbers.length; i++) {
    add += numbers[i];
  }
  return add;
}
module.exports = addNumbers;
