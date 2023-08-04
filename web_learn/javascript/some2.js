// tạo một phương thức some2 có cách thực thi giống pt some của array
var arrs = [
    'ruby',
    'ruby',
    'js',
]

var nums = [1,2,3,4,5,6]

/********************************************************** */

var result = arrs.some(n => n === 'js')
console.log(result)

/********************************************************** */

Array.prototype.some2 = function (cb) {
    var arrayLength = this.length
    for (let i = 0; i < arrayLength; i++) {
        if (cb(this[i], i, this)) {
            return true
        }
    }
    return false
}
var result = arrs.some2(n => n === 'js')
console.log(result)

/********************************************************** */

Array.prototype.mySome = function(cb) {
    var result = false
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                result = true
                break
            }
        }
    }
    return result
}


/**
Expected results:

const numbers = [1, 3, 3, 5];

console.log(numbers.mySome(function (number) {
    return number % 2 === 0;
})); Output: false

console.log(numbers.mySome(function (number, index) {
    return index % 2 === 0;
})); Output: true

console.log(numbers.mySome(function (number, index, array) {
    return array.length % 2 === 0;
})); Output: true
 */


