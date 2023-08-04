// phương thức forEach2 có cách thực thi giống phương thức forEach
Array.prototype.forEach2 = function(cb) {
    for (var index in this) {
        if (this.hasOwnProperty(index)) {
            cb(this[index], index, this)
        }
    }
}
var arrs = [
    'js',
    'ruby',
    'html'
]

arrs.forEach2(function(arr, index, itSelf) {
    console.log(arr, index, itSelf)
})

