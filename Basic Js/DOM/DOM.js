//HTML DOM - document object model - chuẩn www đưa ra

// Gồm 3 thành phần 
// 1. Element: ID, class, tag, CSS selector, HTML Colection
// 2. attribute
// 3. text

// ----------------------

// javascript: Brower | server (nodejs) 
// brower: html > DOM > DOM API

var headingNode = document.getElementById('heading');

console.log({
    element: headingNode
});

var headingNodes = document.getElementsByClassName('heading'); //element có s

console.log({
    element: headingNodes
});


var headingNodes = document.getElementsByTagName('h1');
console.log({
    element: headingNodes
});


var headingNode = document.querySelector('h1:nth-child(2)');        //1 cai dau tien
console.log({
    element: headingNode
});



var headingNodes = document.querySelectorAll('.heading');  //select tất cả thẻ .heading
console.log({
    element: headingNodes
});



console.log([headingNode])