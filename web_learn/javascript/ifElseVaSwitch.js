// CÂU ĐIỀU KIỆN IF ELSE
var course = {
    name: 'javascript',
    coins: 200
}
if (course.coins > 0) {
    console.log(`${course.coins} Coins`)
} else {
    console.log('Free')
}
 
// TOÁN TỬ 3 NGÔI - TERNARY OPERATOR
var result = course.coins > 0 ? `${course.coins} Coins` : 'Free' 
console.log(result)

// LỆNH RẼ NHÁNH SWITCH 
var day = 3;
switch (day) {
    case 2: 
        console.log(`Thu ${day}`)
        break
    case 3: 
        console.log(`thu ${day}`)
        break
    case 4:
        console.log(`thu ${day}`)
}
