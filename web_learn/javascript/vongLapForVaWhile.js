//OBJECT
var user = {
    name: 'Bao Khang',
    age: 18,
    address: 'Phan Thiet'
}

//ARRAY
var myArray = [
    'javascript',
    'python',
    'c++'
]

for (var key in user) {                // duyệt qua các key của object   
    console.log(user[key])
}
                                    // DÙNG FOR-IN LOOP CHO OBJECT VÀ ARRAY
                                    // CÚ PHÁP NHƯ NHAU

for (var key in myArray) {              // duyệt qua các key của array
    console.log(myArray[key])
}

for (var i=0; i<myArray.length; i++) {      // FOR LOOP CHỈ DÙNG ĐƯỢC CHO ARRAY
                                            // CHƯA BIẾT CÁCH DÙNG CHO OBJECT
    console.log(myArray[i])
}


//  FOR - OF LOOP 
// Đối với mảng
var languages = [
    'javascript',
    'ruby'
]

for (var value of languages) {          // duyệt qua các value của array
    console.log(value)      // javascript    ruby
}

// đối với object
var user = {
    name: 'khang',      
    age: 18     
}

for (var key of Object.keys(user)) {            // duyệt qua các key của object          
    console.log(key)      // name        age
}

for (var key of Object.keys(user)) {
    console.log(user[key])        // khang       18
}

for (var value of Object.values(user)) {            // duyệt qua các value của object
    console.log(value)              // khang        18
}

// VÒNG LẶP WHILE
var i = 0
while (i < 1000) {
    console.log(i)
    i++
}

// THỰC TẾ ÁP DỤNG DO - WHILE
var i = 0
var isSuccess = false
do {
    i++
    console.log('Nạp lần thứ ' + i)
    if (false) {
        isSuccess = true
    }
} while(!isSuccess && i<=3)


// BREAK AND CONTINUE IN LOOP
for (var i = 0; i<9; i++) {
    if (i>5) {
        break                   //  BREAK
    }
    console.log(i)   // 0 1 2 3 4 5
}

for (var i = 0; i<9; i++) {
    if (i%2==0) {
        continue                // CONTINUE
    }
    console.log(i)  // 1 3 5 7
}

