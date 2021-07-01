// ClassList properties

// add
// contains
// remove
// toggle


var boxElement = document.getElementById('box');

// xem toan bo class-es
console.log(boxElement.classList);

// return length của set(classlist): các ptu không trùng nhau
boxElement.classList.length 

// return lại string: "this is    a string" bên trong class="this is    a string"
boxElement.classList.value 

boxElement.classList.add('new_class','new_class2')

//accepts only a single class name
boxElement.classList.contains('new_class') //boolean

//nếu có thì remove không thì pass
boxElement.classList.remove('new_class') 

//nếu có new_class thì remove else không có thì thêm vào (switch giữa remove và add)
boxElement.classList.toggle('new_class') 

// kết hợp toggle và setInterval, 
// sau khoảng thời gian 1000ms ~ 1s thì nó sẽ thêm class "make_it_red" và 1s tiếp sẽ remove "make_it_red"
 setInterval(() => {
     boxElement.classList.toggle('make_it_red');
 }, 1000);


 //the shot-way
const $ = document.querySelector.bind(document)
$('h1').classList.add('first-heading')
$('h2').classList.add('second-heading')
$('h2').classList.remove('test')







