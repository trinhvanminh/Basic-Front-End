
//prototype --> giup them thuoc trinh vao class 

// const User = function() {   ................    }

function User(firstname, lastname, avatar) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
}


User.prototype.new_attr = 'new atrribute';

User.prototype.getName = function () {
    return this.firstname;
}

let author = new User('Minh','Trinh Van', 'Avatar');
let user = new User('Nam','Le Quang', 'Avatar');


console.log(author.new_attr);
console.log(user.getName())

