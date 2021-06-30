// like class
// OOP, viet hoa chu cai dau


// const User = function() {   ................    }

function User(firstname, lastname, avatar) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.avatar = avatar;
    this.getName = function() {
        return `${this.firstname} ${this.lastname}`;
    }
}


let author = new User('Minh','Trinh Van', 'Avatar');
let user = new User('Nam','Le Quang', 'Avatar');


console.log(author.firstname);
console.log(author.constructor);
console.log(author.constructor === User);
console.log(user.getName());

// them thuoc tinh

author.title =  'this is personal title';
user.comment = 'this is a comment for only object user';