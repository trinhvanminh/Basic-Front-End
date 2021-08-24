// mượn hàm fuction borrowing

const teacher = {
    firstName: "Minh",
    lastName: "Thu",
}

const me = {
    firstName: "Minh",
    lastName: "Trinh",
    showFullName() {
        console.log(`${this.firstName} ${this.lastName}`)
    }
}

me.showFullName.call(teacher) //bind teacher --> xong call



// kế thừa,
function Animal(name, weight) {
    this.name = name
    this.weight = weight
}

function Chicken(name, weight, legs) {
    Animal.call(this, name, weight)
    this.legs = legs
}

const newChick = new Chicken('Ga con', 300, 2)
console.log(newChick)

// --------------------------- //

//arguments -> su dung cac phuong thuc cua array??

function logger() {
    const arr = Array.prototype.forEach.call(arguments, value => console.log(value))

    //case 2
    // const arr = Array.from(arguments)

    //case 3
    // const arr = [...arguments]

    
    console.log(arr)
}

logger(1,2,3,4,5)

