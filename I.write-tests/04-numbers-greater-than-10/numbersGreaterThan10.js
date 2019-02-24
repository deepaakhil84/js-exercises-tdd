module.exports = function (array) {
    var result = [];

    //for (var i = 0; i < array.length; i++) {
        //var value = array[i];
        var value =array.map(function(arr){

            if(arr > 10) {
                result.push(arr)
        }
        });
        

    return result;
}
// npm test I write-tests/04-numbers-greater-than-10/numbersGreaterThan10/numbersGreaterThan10.test.js