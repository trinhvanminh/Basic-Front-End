// 1. DOM events / Event listener
// 2. json
// 3. fetch
// 4. DOM loation
// 5. local storage
// 6. session storage
// 7. coding convention
// 8. best practices
// 9. mistakes
// 10. performance



// Sử dụng event listener khi nào
// 1. Xử lý nhiều việc khi 1 event xảy ra
// 2. lắng nghe / huỷ bỏ lắng nghe




//------------- DOM events ---------------------------------------

// var btn = document.getElementById('btn')

// btn.onclick = () => {
//     console.log('viec 1');
//     console.log('viec 2');
//     alert('viec 3');
// }

// // cancel DOM events ===== sau 3s thì cái thuộc value của onclick  sẽ bị set thành fuction rỗng 
// // ==>  huỷ bỏ
// setTimeout(function () {
//     btn.onclick = () => { }
// }, 3000)


// -------------- Event listener --------------------------------
// addEventListener(name_event_without_on, function_callback)

var btn = document.getElementById('btn');
btn.addEventListener('click',function () {
    console.log('Event 1');
})

btn.addEventListener('click',function () {
    console.log('Event 2');
})

function viec3() {
    console.log('Event 3');
}

btn.addEventListener('click',viec3)

//nó sẽ thực hiện lần lượt theo thứ tự add vào


//cach remove event

setTimeout(function () {
    btn.removeEventListener('click',viec3)      
}, 3000)
 