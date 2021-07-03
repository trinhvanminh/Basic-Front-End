// toán tử Spread ... -> bỏ dấu [], {}


// ...rest: unpack arguments (đưa vào trong function)
// ...spread: pack arguments (đưa vào khi gọi function)

var array = ['JavaScript','Ruby','PHP'];
var array2 = ['Reactjs','Dart'];
// nối lại [*array, *array2] python
var array3 = [...array, ...array2] //[ 'JavaScript', 'Ruby', 'PHP', 'Reactjs', 'Dart' ]
// console.log(array3)


////////////////////////////////
// nối object, nối json API 

var object = {
    name: 'javascript'
} 

var object2 = {
    price: 1000
}

var object3 = {
    ...object,
    ...object2
}
// object3 return { name: 'javascript', price: 1000 }
// console.log(object3)



var object = {
    api: 'javascript'
} 

var object2 = {
    api: 1000
}
// reutrn { api: 'javascript' } cái sau object sẽ ghi đè nếu trùng key
console.log({
    ...object2,
    ...object
})

////////////////////////////////////////////////////////////////


var object = {
    api: 'javascript'
} 

var object2 = {
    ...object,
    api: 1000,
    // return {api: 1000}

    api: 1000,
    ...object,
    // return {api: 'javascript'}
}
// reutrn { api: 'javascript' } cái sau object sẽ ghi đè nếu trùng key
// console.log(object2)
