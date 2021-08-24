// let a = 1;
// let b = a;
// a = 2;
// console.log(b)

// let a = {
//     name: 'mercedes'
// }

// let  b = a;

// a.name = 'BMW'

// console.log(b)

// function sum(a, b) {
//     // let a = c
//     // let b = d
//     console.log(a+b)
// }

// const c = 1
// const d = 2 

// sum(c, d)


function func(obj) {
    // let obj = a
    obj.name = 'mercedes'
    console.log(obj)
}

const a =  {
    name: 'BMW'
}

func(a)
console.log(a) // {name: 'mercedes'}

//-------------------------

function createCar(obj) {
    obj = {...obj} //
    obj.name = 'Mercedes'
    console.log(obj)
    return obj
}

const car = {
    name: 'BMW'
}

const newCar = createCar(car)

console.log(car)
console.log(newCar)

//-----------------------------------

