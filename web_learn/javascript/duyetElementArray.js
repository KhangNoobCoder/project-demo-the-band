var sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 5
    },
]

// foreach - duyệt qua các phần tử của mảng
sports.forEach(function(sport, index) {
    console.log(index, sport)
})

// every - duyệt qua các phần tử của mảng và trả về true or false
// tất cả elements đều phải thỏa đk -> true
// một trong các phần tử của mảng không thỏa điều kiện -> false
var sameLike = sports.every(function(sport, index) {
    return sport.like === 5   
})
console.log(sameLike) /** false do một trong các phần tử của mảng
không thỏa điều kiện */


// some - cũng duyệt qua từng element và trả về true false
// chỉ cần một element thỏa -> true
// không có element thỏa -> false
var onlyLike = sports.some(function(sport, index) {
    return sport.like === 5
})
console.log(onlyLike) /** true do một trong các phần tử của mảng
thỏa điều kiện */

// find - tìm các element thỏa điều kiện nhưng chỉ trả về
// element thỏa đk đầu tiên
var like = sports.find(function(sport, index) {
    return sport.like > 0
})
console.log(like)

// filter - tìm các element thỏa điều kiện và trả về
// tất cả element thỏa mãn 
var allLike = sports.filter(function(sport, index) {
    return sport.like > 0
})
console.log(allLike)
allLike.forEach(function (element, index) {
    console.log(index, element)
})


const sports = [
    {
        name: 'Bóng rổ',
        like: 6
    },
    {
        name: 'Bơi lội',
        like: 5
    },
    {
        name: 'Bóng đá',
        like: 10
    },
]

function getMostFavoriteSport(arrays) {
    var listLike = arrays.filter(function (array, index) {
        return array.like > 5
    })
    return listLike
}
getMostFavoriteSport(sports)
// Kỳ vọng
console.log(getMostFavoriteSport(sports)) 
// Output: [{ name: 'Bóng rổ, like: 6 }, { name: 'Bóng đá, like: 10 }]


// ARRAY MAP METHOD
// duyệt qua từng element trong mảng và trả về một mảng mới với các element 
// có thể giống hoặc khác tùy mình muốn
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


var nameInfo = listMembersMyFamily.map(function(member, index, originArray) {
    return {
        id: member.id,
        name: `Tran ${member.name}`,
        age: member.age,
        address: 'Phu Tai',
        originArray: originArray, // trả về lại mảng cũ
        originInfo: member,
    }
})
console.log(nameInfo)


// ARRAY REDUCE METHOD
var courses = []
function updateCourses(id, coursesName, coin) {
    return courses.push({
        id: id,
        coursesName: coursesName,
        coin: coin,
    })
}

updateCourses(1, 'js', 100)
updateCourses(2, 'html', 200)
updateCourses(3, 'html', 100)
updateCourses(4, 'ruby', 200)

var totalCoin = courses.reduce(function(accumulator, curentValue, curentIndex, originArray) {
    var total = accumulator + curentValue.coin
    console.table({
        'Luot chay ': curentValue.id,
        'Ten khoa hoc' : curentValue.coursesName,
        'coin ': curentValue.coin,
        'Tich tru duoc: ': total,
    })
    return total
}, 0)
console.log(totalCoin)


// bài tập nhỏ vận dụng reduce và filter
var watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
    }
  ];
  
function calculateRating(array) {
    var filmDirector = array.filter(function(element) {
        return element.Director === "Christopher Nolan"
    })
    var totalRating = filmDirector.reduce(function (total, imdb) {
        return total + Number(imdb.imdbRating)
    }, 0)
    
    return totalRating / filmDirector.length
}

// Expected results
console.log(calculateRating(watchList)); // Output: 8.675



// Flat - "Làm phẳng" mảng từ DepthArray - "mảng sâu"
var arrays = [1, 2, [3, 4], 5, 6, [7, 8, 9]]
var newArrays = arrays.reduce(function (total, array) {
    return total.concat(array)
}, [])
console.log(newArrays)


// Tạo một array method reuduce2 có cách thực thi giống với reduce
var numbers = [1, 2, 3, 4, 5]
Array.prototype.reduce2 = function(callback, result) {
    let i = 0
    if (arguments.length < 2)
    {
        i = 1
        result = this[0]
    }
    for (; i < this.length; i++) {
        // var result1 = result
        result = callback(result, this[i], i, this) 
        // var result2 = result
    //     console.table({
    //         'luot chay': i,
    //         'accumulator': result1,
    //         'curentValue': this[i],
    //         'result' : result2,
    //     })
    }
    return result
}

var result = numbers.reduce2(function(accumulator, curentValue) {
    return accumulator + curentValue
}, 0)
console.log(result)


// Bài tập áp dụng reduce
// input: array         output: object

 
// Expected results:
var arr = [
    ['name', 'Sơn Đặng'],
    ['age', 18],
];

function arrToObj(array) {
    var result = array.reduce(function(objectItem, arrayItem, index) {
        objectItem[arrayItem[0]] = arrayItem[1]
        return objectItem
    }, {})
   return result
}

console.log(arrToObj(arr)); // { name: 'Sơn Đặng', age: 18 }


// includes method - chỉ dùng được với kiểu array và string

// array includes method
var courses = ['JS','java','Ruby','HTML']

console.log(courses.includes('java'))   // true
console.log(courses.includes('JS',1))   // duyệt từ index 1 là java // false
console.log(courses.includes('python')) // false

// string includes method - tương tự array 
var myString = 'js java Ruby HTML'  
console.log(courses.includes('java'))   // true
console.log(courses.includes('JS',1))   // duyệt từ index 1 là java // false
console.log(courses.includes('python')) // false