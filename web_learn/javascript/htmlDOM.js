// HTML DOM

// 1. element: ID, class, tag, CSS selector, HTML collection
var idNode = document.getElementById('headingId')
console.log(idNode)

var classNodes = document.getElementsByClassName('heading')
console.log(classNodes)

var tagNodes = document.getElementsByTagName('h1')
console.log(tagNodes)

// CSS selector
console.log(document.querySelector('h1'))
console.log(document.querySelector('#headingId'))
console.log(document.querySelector('.heading'))
console.log(document.querySelectorAll('h1'))

// HTML collector : forms, anchors, image,...
console.log(document.forms['form-1'])
console.log(document.forms.testForm)


// 2. attribute
var headingElement = document.querySelector('h1')

// phương thức này chỉ dùng cho attributeName hợp lệ với thẻ tag
headingElement.title = 'heading'  
// phương thức này thì dùng được cho mọi attributeName muốn đặt 
headingElement.setAttribute('title-data','heading-data')
console.log(headingElement)
console.log(headingElement.title)
console.log(headingElement.getAttribute('title-data'))
console.log(headingElement.getAttribute('id'))

// 3. text
// innerText, textContent

// innerHTML, outerHTML(ít dùng)
// Cách 1
var courses = ['HTML & CSS', 'Javascript', 'PHP', 'Java']

function render(courses) {
    var arrayCourses = courses.map(function(course) {
        return `<li>${course}</li>`
    })
        var ulElement = document.querySelector('ul')
        return ulElement.innerHTML = arrayCourses.join('')
}

render(courses)
console.log(render(courses))

// Cách 2
function render1(courses) {
    var myArr = []
    for (var course of courses) {
        myArr.push(`<li>${course}</li>`)
    }
    return document.querySelector('ul').innerHTML
            = myArr.join('')
}
render1(courses)
console.log(render1(courses))

// DOM style
// classlist property
// 1. add
// 2. contains
// 3. remove
// 4. toggle
