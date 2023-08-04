// tạo một phương thức find2
var arrs = [
    'ruby',
    'ruby',
    'js',
]

var nums = [1,2,3,4,5,6]

/********************************************************** */

var result = arrs.find(function (arr, index, itSelf) {
    return arr === 'js'
})
console.log('arr in find is: ', result)

var result2 = nums.find(function(num, index, itSelf) {
    return num > 2
})
console.log('num in find is: ', result2)
/********************************************************** */

Array.prototype.find2 = function(cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            if (cb(this[index], index, this)) {
                return this[index]
            }
        }
    }
    return undefined
}

var result3 = arrs.find2(function (arr, index, itSelf) {
    return arr === 'js' 
})
console.log('arr in find2 is: ', result3)

var result4 = nums.find2(function (num, index, itSelf) {
    return num > 2
})
console.log('num in find2 is: ', result4 )
