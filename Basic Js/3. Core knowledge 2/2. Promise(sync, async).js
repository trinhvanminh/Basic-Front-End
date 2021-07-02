// 1. DOM events / Event listener  --> OK
// 2. JSON                         --> OK
// 2.5. Promise                    <-- current
// 3. fetch
// 4. DOM loation
// 5. local storage
// 6. session storage
// 7. coding convention
// 8. best practices
// 9. mistakes
// 10. performance

// Promise 
// - Sync   (đồng bộ)
// - Async  (bất đồ bộ)

// đồng bộ là viết trước chạy trước
console.log(1)
console.log(2)

// bất đồng bộ 
// xuất hiên trong setInterval() setTimeout(), 
//                 fetch, XMLHttpRequest, file reading
//                 request animation frame

// vd
setTimeout(function() {
    console.log('in set time out')
}, 1000);

console.log('after set time out');

// ==> kết quả: after set time out > in set time out



