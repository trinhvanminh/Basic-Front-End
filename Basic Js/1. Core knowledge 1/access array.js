// Array methods:
//     forEach()    
//     every()      return boolean
//     some() 
//     find() 
//     filter() 
//     map() 
//     reduce() 

var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250
    },
    {
        id: 2,
        name: 'html/css',
        coin: 0
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0
    },
    {
        id: 4,
        name: 'reactjs',
        coin: 500
    },
    {
        id: 5,
        name: 'ruby',
        coin: 500
    }
];

courses.forEach(function(value, index) {
    console.log(index, value);
});

// duyệt tất cả các phần tử nếu một trong các phần tử khiến return false --> stop
var isAllFree = courses.every(function(value, index) {
    return value.coin === 0;
});

console.log(isAllFree);  //false


// chỉ cần có một trong all thoả điều kiện --> return true --> stop
var isSomeFree = courses.some(function(value, index) {
    return value.coin === 0;
});

console.log(isSomeFree); //true


// kiểm tra xem name có bằng ruby (đầu tiên) không 
// nếu có --> stop --> trả về value = { id: 3, name: 'ruby', coin: 0 } Ngược lại return undefied
var val = courses.find(function(value, index) {
    return value.name === 'ruby';
})

console.log(val); //{ id: 3, name: 'ruby', coin: 0 }


// tương tự như find nhưng trả về tất cả các value thoả mãn --> return a list
var val = courses.filter(function(value, index) {
    return value.name === 'ruby';
})

console.log(val); //[{ id: 3, name: 'ruby', coin: 0 },{ id: 5, name: 'ruby', coin: 500 }]



// map tương tự Python

const array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]



// reduce ------------> dùng để tính toán với giá trị khởi tạo accumulator, mặc đinh là 0

const array2 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue; //arrow function 

// 1 + 2 + 3 + 4
console.log(array2.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array2.reduce(reducer, 5));
// expected output: 15


let start_position = 0;
let title = 'abc xyz qwer';  //tương tự với mãng array
console.log(title.includes('xyz',start_position)) // true / false

