//LÀM VIỆC VỚI CHUỖI

var myString = 'Toi da la da sinh vien!'

// keyword: Javascript string methods

// 1. length - kiểm tra độ dài (số kí tự) của chuỗi
console.log(myString.length)   // 23

// 2. find index
console.log(myString.indexOf('da'))  // 4  // tra ve vi tri cua ki tu xuat hien lan dau
console.log(myString.indexOf('da',6))// 10  // tra ve vi tri cua ki tu xuat hien lan hai
                // idexOf('string', number bất kì)
console.log(myString.lastIndexOf('da')) // 10 // tra ve vi tri cua ki tu xuat hien lan cuoi

// 3. cut string 
console.log(myString.slice(4,6))
console.log(myString.slice(-5,-1))

// 4. replace
console.log(myString.replace('sinh vien', 'hoc sinh'))
var myString2 = '       JS thi chi van mai la JS ma thoi        '
console.log(myString2.replace(/JS/g, 'javascript'))  //bieu thuc chinh quy

// 5. convert to upper case
console.log(myString.toUpperCase())

// 6. convert to lower case
console.log(myString.toLowerCase())

// 7. trim
console.log(myString2.trim())

// 8. split  // convert string sang array
var variable = 'PHP, javascript, python'
console.log(variable.split(', '))

// 9. Get a character by index
console.log(myString[1])
console.log(myString.charAt(1))
