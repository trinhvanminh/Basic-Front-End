
// function Course(name, price) { 
//     this.name = name;
//     this.price = price;
//     this.getName = function() {
//         return this.name;
//     }
// }

// Class để trình bày constructor function một cách OOP

class Course {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
    getName() { return this.name; }
    getPrice() { return this.price; }
    
}