// phương thức map2 thực thi giống phương thức map của array
Array.prototype.myMap = function (cb) {
    var result = [], arrayLength = this.length
    for (var i = 0; i < arrayLength; i++) {
        result.push(cb(this[i], i))
    }
    return result
}

// Expected results
const numbers = [1, 2, 3];

console.log(numbers.myMap(function (number) {
    return number * 2;
})) // Output: [2, 4, 6]

console.log(numbers.myMap(function (number, index) {
    return number * index;
})) // Output: [0, 2, 6]
