
// decoration function
function logger(log) {
    console.log(log);
};


//expression function
const logger2 = function(log) {
    console.log(log)
}

logger2('asdsadadsa')


//arrows function

const logger3 = (log) => {
    console.log(log)
}
logger3('asdsa')

const oneAgurment = a => console.log(a);

const sum = (a,b) => a+b;
console.log(sum(1,2))

const returnObject = (a,b) => ({a: a, b: b});
console.log(returnObject(1,2))



// arrows function 
// không có this // context 
// không thể làm function constructor


//tạo constructor function
// viết hoa chữ cái đầu 

const Course = function(name, price) {
    this.name = name;
    this.price = price;
};

const jsCourse = new Course('javascript', 100);
console.log(jsCourse);


// const Course2 = (name, price) => {
//     this.name = name;
//     this.price = price;
// };

// const jsCours2 = new Course2('javascript', 100);
// console.log(jsCourse2);

// ========> Error: Course2 is not a constructor