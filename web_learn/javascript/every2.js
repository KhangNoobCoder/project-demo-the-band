// tạo một phương thức every2 có cách thực thi giống every của array
var arrs = [
    'js',
    'ruby',
    'js',
]

var nums = [1,2,3,4,5,6]

/********************************************************** */

var result = arrs.every(function(arr, index, arrs) {
    return arr === 'js '
})
var result2 = nums.every(n => n > 0)
console.log('arr in every is: ', result)       // false
console.log('num is every is: ', result2)      // true

/********************************************************** */

Array.prototype.every2 = function(cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!cb(this[index], index, this)) {
                return false
            }
        }
    }
    return true
}
var result3 = arrs.every2(arr => arr ==='js')
var result4 = nums.every2(n => n > 0)
console.log('arr in every2 is: ', result3)  // false
console.log('num in every2 is: ', result4)  // true

/********************************************************** */

Array.prototype.myEvery = function(cb) {
    var output = true
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (!cb(this[index], index, this)) {
                output = false
                break;
            }
        }
    }
    return output;
}


// Expected results

// const numbers = [1, 3, 3, 5];

// console.log(numbers.myEvery(function (number) {
//     return number % 2 !== 0;
// })); // Output: true

// console.log(numbers.myEvery(function (number, index) {
//     return index % 2 === 0;
// })); // Output: false

// console.log(numbers.myEvery(function (number, index, array) {
//     return array.length % 2 === 0;
// })); // Output: true





