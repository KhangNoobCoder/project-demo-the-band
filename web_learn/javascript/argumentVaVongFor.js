// đối tượng arguments và vòng for       
function text() {               
    var myString = '';
    for (var param of arguments) {      // vòng for duyệt qua từng đối số được truyền tham số vào 
        myString += `${param} - `;
    }
    console.log(myString)
}
text('hello','hi', 'javascript')  // hello - hi - javascript

function text1() {  
    console.log(arguments)
}

text1('hello','hi', 'javascript')  