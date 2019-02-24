function getLargestNumber(array) {
  var largestNumber = 0;
  for (var i = 0; i < array.length - 1; i++) {
    if (array[i] > largestNumber) {
      largestNumber = array[i];
    }
  }

  //largestNumber = Math.max(...array);

  return largestNumber;
}

module.exports = getLargestNumber;
