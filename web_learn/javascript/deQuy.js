var myArray = [1,2,3,1,2,3]
var myArray2 = [...(new Set(myArray))]
// console.log(myArray2.toString())   // 1,2,3

// ĐẾM NGƯỢC (dùng đệ quy)
function countDown(num) {
    if (num>=0) {
        console.log(num)
        return countDown(num-1) // đệ quy
    }
}
// countDown(10)

// In ra index của mảng
// Áp dụng callback và đệ quy
function deQuy(start, end, cb) {
    if (start <= end) {
        cb(start)
        return deQuy(start + 1, end, cb)
    }
}
// deQuy(0, myArray.length - 1, function(index) {
//     console.log('index: ',index)
// })

// Tính giai thừa
function giaiThua(num) {
    if (num > 0) {
        return num * giaiThua(num - 1)
    }
    return 1;
}
// console.log(giaiThua(6))