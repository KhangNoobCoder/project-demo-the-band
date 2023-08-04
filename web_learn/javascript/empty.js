// empty elements of array
var courses = ['JS', 'PHP', 'HTML']

// Cách khởi tạo length của mảng 
courses.length = 10
console.log(courses)

// Khởi tạo length nếu là truyền một tham số kiểu number
var myArray = new Array(10)    
console.log(myArray)    // empty * 10

// Nếu truyền nhiều tham số thì là các element của mảng
var myArrs = new Array(10, 12, 13)
console.log(myArrs)     // [10, 12, 13]

for (var i = 0; i < courses.length; i++) {
    console.log(courses[i])
}  
for (var value of courses) {
    console.log(value)
}
// Cách dùng vòng lặp for và for-of không phù hợp khi length thực 
    // của mảng (3 element) không trùng với length của array
    // (10)

// Ta sẽ dùng for-in cho trường hợp này
for (var index in courses) {
    console.log(courses[index])
}
