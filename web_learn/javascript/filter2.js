// tạo một phương thức find2
var arrs = [
    'ruby',
    'ruby',
    'js',
]

var nums = [1,2,3,4,5,6]

arrs.length = 10
nums.length = 20

/********************************************************** */

var result = arrs.filter(function (arr, index, itSelf) {
    return arr === 'ruby'
})
console.log('arr in filter is: ', result)
// ['ruby', 'ruby']

var result2 = nums.filter(function(num, index, itSelf) {
    return num > 2
})
console.log('num in filter is: ', result2)
// [3, 4, 5, 6]
/********************************************************** */

Array.prototype.filter2 = function(cb) {
    var myArr = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                myArr.push(this[i])
            }
        }
    }
    
    return myArr
}

var result3 = arrs.filter2(function (arr, index, itSelf) {
    return arr === 'ruby' 
})
console.log('arr in filter2 is: ', result3)
// ['ruby', 'ruby']

var result4 = nums.filter2(function (num, index, itSelf) {
    return num > 2
})
console.log('num in filter2 is: ', result4 )
// [3, 4, 5, 6]

/********************************************************** */

Array.prototype.myFilter = function(cb) {
    var output = []
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                output.push(this[index])
            }
        }
    }
    return output
}



const numbers = [1, 2, 3, 4];

console.log(numbers.myFilter(function (number) {
    return number % 2 === 0;
})); // Output: [2, 4]

console.log(numbers.myFilter(function (number, index) {
    return index % 2 === 0;
})); // Output: [1, 3]

console.log(numbers.myFilter(function (number, index, array) {
    return array.length % 2 === 0;
})); // Output: [1, 2, 3, 4]
 



