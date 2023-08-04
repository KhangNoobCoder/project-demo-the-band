myLogin()    //declaration function được thực thi khi được 
            //gọi trước định nghĩa hoặc sau định nghĩa đều
            //được
        



function myLogin() {
    console.log('declaration function')
}
var yourLogin = function() {
    console.log("expression function")
}


yourLogin()   // expression function chỉ được thực thi khi
              // khi gọi sau định nghĩa
              // ít dùng