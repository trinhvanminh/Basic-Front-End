values = [1,2,3,4,5]

/*
function something(value, index, originArray) {
    return what
}

values.map(something)       //return what

// hoạt dộng tương tự như map python, map từng phần tử value trong values đưa vào hàm something
// có thêm 2 param mặc định của hàm map là index và originArray (tương ứng với array values)

*/

// --------------------------REDUCE---------------------------
// accumulator: biến lưu trữ ~ tượng tự biên sum , currentValue


// function sum_fucntion(accumulator, currentValue, currentIndex, originArray) {
//     // do some thing
//     return accumulator + currentValue //tương trự sum = sum + currentValue
// }

// originArr.reduce(sum_fucntion, 0) // tính sum khởi tạo sum = 0, có thể khởi tạo một biến hoặc sum = [],....


console.table({'abc':123})

var a = [10, 21, 13, 56];

function add(a, b) { return a + b }
function foo(a, b) { return a.concat(b) }


Array.prototype.reduce2 = function(callback, init){
    //nếu không có dối số init thì reduce sẽ lấy trá trị đầu làm khởi tạo
    var i = 0;
    if (arguments.length < 2) {
        i = 1;
        init = this[0];
    }
    let result = init;
    // currentValue = this[i];
    // originArray = this;
    // accumulator = result
    for ( ; i < this.length; i++){
        result = callback(result, this[i], i, this)
    }
    return result
}

console.log(a.reduce2(add,0)) //100
// console.log(a.reduce(add), a.reduce2(add))         // 100 100
// console.log(a.reduce(add, 10), a.reduce2(add, 10)) // 110 110
// // extra test with foo:
// console.log(a.reduce(foo, 'X'), a.reduce2(foo, 'X')) // X10211356 X10211356




//----------TRUYỀN INIT HAY KHÔNG TRUYỀN ????---------------------


// khi giá trị this[0] cùng kiểu với kiểu mong muốn trả ra --> có thể bỏ khởi tạo


// khi muốn cộng object.value mà không truyền tham số 
// ==> this[0] = object --> trả về object1 + object2.value + object3.value ......




let deptArray = [1,2,[3,4],5,6,[7,8,9]];
// khởi tạo là outFlatArray = [] vì mong muốn trả về array || 
// ------ nếu không tuyền gì sẽ lấy 1 tương ứng Number làm kiểu dữ liệu --> concat lỗi
// nối từng item trong deptArray vào outFlatArray
let flatArray = deptArray.reduce((outFlatArray, deptItem) => outFlatArray.concat(deptItem), [])

console.log(flatArray)



var courses = [
    {
        id: 1,
        name: 'javascript',
        coin: 250,
        isFinish: true
    },
    {
        id: 2,
        name: 'html/css',
        coin: 0,
        isFinish: true
    },
    {
        id: 3,
        name: 'ruby',
        coin: 0,
        isFinish: true
    },
    {
        id: 4,
        name: 'reactjs',
        coin: 500,
        isFinish: true
    },
    {
        id: 5,
        name: 'ruby',
        coin: 500,
        isFinish: true
    }
];


// Array.prototype.map2 = function(callback){
//     var output = [];
//     for(var i = 0; i < this.length; i++)
//     {   
//         output.push(callback(this[i], i));
//     }
//     return output;
// }

// const map1 = courses.map2(x => x.id * 2);

// console.log(map1);

Array.prototype.forEach2 = function (callback) {
    
    for(var i in this){
        // nếu index không nằm trong own property của Array
        //  - tức nghĩa là những phương thức tự định nghĩa như forEach2 -index trong prototype
        if (this.hasOwnProperty(i))
            callback(this[i], i, this);
    }
}
// e = this[i]
courses.forEach2(e => console.log(e.name))
console.log('aaaaaaaaaaaaa')

// Array.prototype.find2 = function (callback, positon) {
//     if (arguments.length < 2){
//         positon = 0
//     }

//     for(var i = positon; i < this.length; i++){
//        if(callback(this[i]))
//             return this[i];
//     }
// }
// console.log(courses.find2(e => e.name === 'ruby'))

Array.prototype.filter2 = function (callback) {
    var output = []
    for(var i in this){
        if (this.hasOwnProperty(i)){
            var result = callback(this[i], i, this)
            if(result)
                output.push(this[i]);
        }
        
    }
    return output
}
console.log(courses.filter2(e => e.name === 'ruby'))


Array.prototype.some2 = function (callback) {
    for(var i in this){
        if (this.hasOwnProperty(i)){
            if(callback(this[i], i, this))
                return true
        }
    }
    return false
}
console.log(courses.some2(e => e.name === 'reactjs'))


Array.prototype.every2 = function (callback) {
    for(var i in this){
        if (this.hasOwnProperty(i)){
            if(!callback(this[i], i, this))
                return false
        }
    }
    return true
}
console.log(courses.some2(e => e.isFinish))