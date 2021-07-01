

var boxElement = document.querySelector('.box')


//clg de xem tat ca thuoc tinh cua boxElement
console.log([boxElement.style]) 

//cach 1 (set tung thuoc tinh)
boxElement.style.width = '200px'; 
boxElement.style.height = '200px'; 
boxElement.style.backgroundColor = '200px'; 
// cach 2
Object.assign(boxElement.style, { width: '200px', height: '200px', backgroundColor: 'red'})