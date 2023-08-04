var nums = [1, 2, 3, 4, 5]

/********************************************************** */

var result = nums.reduce(function(accumulator, curentValue, curentIndex, array) {
    return accumulator + curentValue
}, 1)
console.log(result)

/********************************************************** */

Array.prototype.reduce2 = function(cb, result) {
    let i = 0
    if (arguments.length < 2) {
        result = this[i]
        i = 1
    }
    var arrayLength = this.length
    for (; i < arrayLength; i++) {
        result = cb(result, this[i], i, this)
    }
    return result
}
var result2 = nums.reduce2(function(acc, val, ind, array) {
    return acc + val
}, 1)
console.log(result2)