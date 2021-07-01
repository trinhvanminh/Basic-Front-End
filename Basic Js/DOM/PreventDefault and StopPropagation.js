// Sự kiện onmousedown, onmouseup và onclick là tất cả các phần của một cú click chuột. Đầu tiên khi một nút chuột được bấm, sự kiện onmousedown được kích hoạt, sau đó, khi nút chuột được giải phóng, sự kiện onmouseup được kích hoạt, cuối cùng, khi nhấp chuột hoàn tất, sự kiện onclick được kích hoạt.

// // sẽ không thực hiện được vì khi click vào thẻ ul/li thì
// // focus của thẻ input sẽ mất nên ul sẽ bị ẩn đi (display: none);


document.querySelector('ul').onclick = function (e) {
    console.log(e.target)
}

//  UNCOMMENT từ đây tới line 30 và comment bên trên để thấy kahsc biệt

// // cách giải quyết với preventDefault
// // sử dụng onmousedown để lắng nghe, bắt sự kiện khi nhấn chuột xuống 
// // (chưa thả ra) --> preventDefault --> 
// // để khi mousedown có thể nhấn vào ul/li
// // khi thả ra mouseup --> chạy hành động default 
// // --> onclick không thể kích hoạt do k chạy hết mouseup

// document.querySelector('ul').onmousedown = function (e) {
//     // e.target.preventDefault;
//     e.preventDefault(); 
//     // console.log(e.target)
// }

// document.querySelector('ul').onclick = function (e) {
//     console.log(e.target)
// }



// //------------ StopPropagation ---------------------


document.querySelector('div').onclick = function (e) {
    console.log('DIV') //return DIV
}

document.querySelector('button').onclick = function (e) {
    console.log('click me!!')   
    //return click me!! và DIV 
    //do bubble events nổi từ phần tử con ra ngoài cha gặp đc sự kiện tại thẻ div
}

/***
 * ngăn chặn bubble events 
 */

// UNCOMMENT và comment phía trên 

//  document.querySelector('button').onclick = function (e) {
//     // chặn sự kiện nổi bọt khi click bào thẻ button
//     e.stopPropagation();
//     console.log('click me!!')   
// }

