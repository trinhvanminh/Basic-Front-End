const iPhone7 = {
    // thuoc tinh - property 
    name: 'iPhone 7',
    color: 'Pink',
    weight: 300,

    // phuong thuc - method 
    takePhoto() {
        console.log(this)
    }, 
    objChild: {
        name: 'child object',
        methodChildd() {
            console.log(this)
        }
    }
}

iPhone7.objChild.methodChildd()


function Car(name, color, weight) {
    this.name = name
    this.color = color
    this.weight = weight
    this.run = function() {
        console.log('running...', this)
    }
}

const mercedesS450 = new Car('Mercedes S450','black', 3000)
mercedesS450.run()

