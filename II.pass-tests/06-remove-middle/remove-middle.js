function removeMiddle(array) {
  var length = array.length / 2;
  return array.splice(length, 1);
  // return output;
}
module.exports = removeMiddle;
