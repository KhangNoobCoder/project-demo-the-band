// LÀM VIỆC VỚI OBJECT
var old = 'age'
var student = {
    name: 'Tran Bao Khang',
    [old]: 18,
    address: 'Phan Thiet',
    getName: function() {
        return this.name
    }
} 
console.log(student)
console.log(student.name)   // Tran Bao Khang

var fullName = 'name'

console.log(student[fullName])  // Tran Bao Khang
console.log(student.age)    // 18
console.log(student[old])   // 18

student.email = 'baokhang1234@gmail.com'   //them key trong object

delete student.age              //xoa key trong object

console.log(student.getName())

student.getAge = function() {
    return this.age
}

console.log(student)


//Function --> phương thức / method
//others --> thuộc tính / property
 


// OBJECT CONSTRUCTOR
function Person(firstName, lastName, age) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.getName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}
var mySister = new Person('Dan', 'Thu', 15)
var me = new Person('Bao', 'Khang', '18')

console.log(mySister)
console.log(me)
me.title = 'Hello world'

console.log(me.getName())


Person.prototype.getName = function() {
    return `${this.firstName} ${this.lastName}`
}

console.log(mySister.getName())
