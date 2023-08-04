// LÀM VIỆC VỚI ARRAY

// keyword: javascript array methods

var myArray = [
    'java',
    'PHP',
    'Ruby'
]

// 1. to String - convert sang string
// console.log(myArray.toString()) // java,PHP,Ruby

// 2. join - convert sang string va them ki tu ngan cach giua cac element
// console.log(myArray.join(' - '))  // java - PHP - Ruby

// 3. pop - xoa  element o cuoi mang va tra ve element do
// console.log(myArray.pop()) // Ruby
// console.log(myArray)    // ['java', 'PHP']

// 4. push - them element o cuoi mang va tra ve length cua mang moi
// console.log(myArray.push('python','c++'))   // 5
// console.log(myArray)    // ['java', 'PHP', 'Ruby', 'python', 'c++']
// ứng dụng của push: thêm thành viên cho gia đình
var listMembersMyFamily = [
    {
        id: 1,
        name: 'Bao Khang',
        age: 18,
    },
    {
        id: 2,
        name: 'Dan Thu',
        age: 15,
    }
]

// function updateMember(id, name, age) {
//     listMembersMyFamily.push({
//         id: id,
//         name: name,
//         age: age
//     })
// }

// updateMember(3,'Van Hung', 60)
// updateMember(4,'Thi Sau', 50)
// console.log(listMembersMyFamily)

// 5. shift - xoa  element o dau mang va tra ve element do
// console.log(myArray.shift())    // java
// console.log(myArray)    // ['PHP', 'Ruby']

// 6. unshift - them element o dau mang va tra ve length cua mang moi
// console.log(myArray.unshift('javascript'))  // 4
// console.log(myArray)    // ['javascript', 'java', 'PHP', 'Ruby']

// 7. splicing - cat elements va tra ve elements do (co anh
// huong den mang goc)
// console.log(myArray.splice(1,2)) //  ['PHP', 'Ruby']
// console.log(myArray)  // ['java']

// 8. concat - noi cac array hoac cac string hoac array
//    va string voi nhau
var myArray2 = [
    'python',
    'ruby'
]
var myString = 'hello world'
// console.log(myArray.concat(myString).concat(myArray2))
// ['java', 'PHP', 'Ruby', 'hello world', 'python', 'ruby']

// 9. slicing - cắt mảng và trả về mảng mới mà không ảnh hưởng đến
//              mảng cũ
// console.log(myArray.slice(1,2)) // ['PHP']
// console.log(myArray)    // ['java', 'PHP', 'Ruby']
