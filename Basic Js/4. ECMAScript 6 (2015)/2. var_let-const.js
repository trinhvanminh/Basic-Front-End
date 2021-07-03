// 1. var / let, const : Scope, Hosting
// 2. const / var, let: Assignment

//code block: if else, loop, {},....


//  Scope
if(true) {
    var a = 'a có thể được truy cập bên ngoài'
}

// bên trên tương tương bên dưới

{
    var a = 'var có thể được truy cập bên ngoài và bên trong'
    let b = 'let không thể truy cập ngoài block, bên trong có thể truy cập'
    const c = 'const không thể truy cập ngoài block, bên trong có thể truy cập'
}

console.log(a)
// console.log(b)   //error
// console.log(c)   //error


{
    var a = 'var có thể được truy cập bên ngoài và bên trong'
    let b = 'let không thể truy cập ngoài block, bên trong có thể truy cập'
    const c = 'const không thể truy cập ngoài block, bên trong có thể truy cập'
    // const c = 123 ----> error
    {
        {
            // vẫn thành công nếu khai báo truy cập bên trong,
            // nếu khai báo phía ngoài line 29 --> error
            const c = 123;
            console.log(c)
        }
    }
}

console.log(a)
// console.log(b)   //error
// console.log(c)   //error


// Hosting
a = 1;
var a;
// --> hosting sẽ đổi thành var a; a = 1; 
// chỉ var mới có hỗ trợ hosting


// ------------------ Assignment -----------------
var a = 2;
var a = 'string'
a = {}
console.log(a)

// let a = 2; // error: 'a' has already been declared

let b = 2;
// let b = 'string' // error: 'b' has already been declared
b = 'string' // gán trá trị lại thì ok còn khai báo đè lại như trên thì sai
console.log(b)

// constant: không thể thay đổi giá trị, không thể khai báo đè
const c = 2;
// const c = 'string'  --> error
// c = 3; ---> error
