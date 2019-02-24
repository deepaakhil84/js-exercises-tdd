function secondLargest(array) {
  array.sort(function(a, b) {
    return b - a;
  });
  return array[1];
}
module.exports = secondLargest;
