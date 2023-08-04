/**
 * Các toán tử thường gặp:
 * Toán tử số học - Arithmetic (+,-,*,**,/,%,++,--)
 * Toán tử gán - Assignment (= , += , -= , *= , /=)
 * Toán tử so sánh - Comparison (> , < , >= , <=) 
 *                              (== , !=) - chi so sanh ve value
 *                              (===, !==) - so sanh ca ve data type va value (chinh xac hon)
 */
var a = 1;
var b = '1';
console.log(a === b); //false
console.log(a !== b); //true

/**
 * Toán tử logic - Logical
 */

/**
 * tiền tố - prefix (++a, --a)
 * hậu tố - postfix (a++, a--)
 */

/**
 * primitive data - dữ liệu cơ bản
 */
//Number type
var a = 1;

//String type
var aString = 'Tran Bao Khang'
console.log(aString)
console.log(typeof aString)  //string // output kieu du lieu cua gia tri cua bien

//undefined type
var age
console.log(age)  //undefined

//null type
var isNull = null
console.log(isNull)  //null

//symbol type
var id = Symbol('id')
console.log(id)

/**
 * complex data
 */
//function type
// Declarasion function
var myFunction = function() {
    console.log('xin chao')
}
myFunction()

// Expression function
function myFunction2() {
    console.log('xin chao2')
}

//thêm tham số cho function
function writeLog(message) {
    console.log(message)
}
writeLog('hello')

// nhiều tham số cho function
function writeLog(message,message1) {
    console.log(message)
    console.log(message1)
}
writeLog('hello','hi')

function writeLog(message,message1) {
    console.log(message)
    console.log(message1)
}
writeLog('hello') //do truyền đối số ko đủ theo tham số
                  //nên result là: undefined



//object type
var myObject = {      //object:  key va value
    name: 'Tran Bao Khang',
    age: 18,
    address: 'Phan Thiet'
}
console.log(myObject)

var myArray = [         //array: key auto la so thu tu
    'C++',
    'javascript',
    'python'
]
console.log(myArray)



// Truong hop dac biet cua toan tu logical va cau lenh if

/**
 * Trong javascript co 6 gia tri khi convert sang kieu boolean
 * tra ve gia tri false:
 * 1. 0
 * 2. '', ""
 * 3. null
 * 4. undefined
 * 5.NaN
 * 6. false
 */

/**
 * voi toan tu logic AND, cac gia tri se duoc gan lan luot
 * cho bien result tu trai sang phai, neu gia tri ko nam 
 * trong 6 gia tri tren thi se bo qua va neu gap mot trong 6 
 * gia tri tren thi lay gia tri do va tra ve gia tri do hay
 * bool cua gia tri do, neu ko co gia tri nao thuoc 6 kieu gia
 * tri tren thi lay gia tri cuoi cung de xet 
 */
// tom lai, toan tu AND se lay gia tri false
var result = 'a' && null && 'c';
console.log(result);    //tra ve null

var myResult = 'a' && 'b' && 'c';
console.log(myResult);  //tra ve c 

var a = 1;
var b = 1;
var isResult = (a==b && a>=b && a<=b);
console.log(isResult)       // tra ve true do ko co gia tri
                            // nao thuoc 6 gia tri tren nen
                            // lay ra bool cua gia tri cuoi
                            
if (isResult) {
    console.log('dung')
} else {
    console.log('sai')
}
/**
 * voi toan tu logic OR, cac gia tri se duoc gan lan luot
 * cho bien result tu trai sang phai, neu gia tri nam 
 * trong 6 gia tri tren thi se bo qua va neu gap mot trong 6 
 * gia tri khong thuoc tren thi lay gia tri do va tra ve gia tri do hay
 * bool cua gia tri do, neu cac gia tri nao thuoc 6 kieu gia
 * tri tren thi lay gia tri cuoi cung de xet
 */
// toan tu OR se lay gia tri true
var notTrue = null || 1 || undefined;
console.log(notTrue) // 1

var isNotTrue = 2 || 3 ||4;
console.log(isNotTrue)  // 2

var itTrue = null || false || undefined;
console.log(itTrue) // undefined