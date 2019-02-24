// the input is an array of numbers and strings
// return the average of all the numbers
// be sure to exclude the strings
/* 1.make sure array contain only numbers
2.add all the numbers in the array
3.find the length of the array
4.divide total by length */
function getAverage(array) {
  var numberArray = [];
  var total = 0;
  var length;
  var average;
  array.forEach(function(num) {
    if (typeof num == "number") {
      numberArray.push(num);
    }
  });
  length = numberArray.length;
  for (var i = 0; i < length; i++) {
    total = total + numberArray[i];
  }
  return (average = total / length);
}

module.exports = getAverage;
