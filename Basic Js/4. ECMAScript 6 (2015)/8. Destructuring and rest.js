// ...var_name  tương đương  * hoặc ** trong python

// giai quyet

var arr = ['JavaScript', 'PHP', 'Java'];
var a = arr[0];
var b = arr[1];
var c = arr[2];
console.log(a,b,c);

// ==> phân rã với Object và Array
// tương tự như a, b, c = arr        python
var [a, b, c] = arr;
// tương tự a, _, c = arr           python
var [a, , c] = arr;
// a, b, * = arr python             python
// rest là tên biến để chứa phần còn lại tương tự như * python
// ...rest là một array
var [a, ...rest] = arr;

console.log(a) //JavaScript
console.log(rest) //[ 'PHP', 'Java' ]

////////////////////////////////

// Tương tự với object
var course = {
    name: 'JavaScript',
    price: 1000,
    image: 'url',
    children: {
        name: 'Reactjs'
    },
    // description: 'description value'
}
// tương tự như với list nhưng sử dụng trong cặp dấu {}
// lấy phần tử nào thì truyền key tương ứng vào
// ...rest là một object
var {image, name, ...rest} = course
console.log(image, name, rest) //url JavaScript { price: 1000 }


// delete course.image
// nếu không dùng delete để delete operator thì có thể dùng ...rest
// để lấy ra phần còn lại trừ phần tử image (muốn xoá)
var {image, ...rest} = course
console.log(image, rest) //rest: { name: 'JavaScript', price: 1000 }

 
//nếu có một object children bên trong object cha
//nhưng nếu trùng tên --> đặt tên lại

var {name: parentName, children: {name: childrenName}, price } = course
console.log(parentName, childrenName, price) //JavaScript Reactjs 1000



//default value khi lấy kết quả từ object
var {name, description='default value'} = course
console.log(name, description) //JavaScript default value




//Tương tự trong function, ...params ~ **params python
function logger(a, ...params) {
    console.log(a)    //mot
    // console.log(arguments)   //return object [Arguments] { '0': 'mot', '1': 2, '2': 3, '3': 4, '4': 5 }
    console.log(params) //return array  [ 2, 3, 4, 5 ]
}
logger('mot',2,3,4,5)


// truyền vào object
function logger2({price, ...params}) {
    console.log(price)  //1000   
    // console.log(arguments)   //return object [Arguments] { name: 'JavaScript',price: 1000, description: 'Description content'  }
    console.log(params) //return object  { name: 'JavaScript', description: 'Description content' }
}
logger2({
    name: 'JavaScript',
    price: 1000,
    description: 'Description content'
})

// Tương tự với mảng array function logger3([a, ...params]) { dosomething with a: first value of array}