// DOM events
// 1. Attribute events
// 2. Assign event using the element code

// ghi trực tiếp vào thẻ html

// <h1 onclick="console.log('clicked')"></h1>


var h1Element = document.querySelectorAll('h1');
for(var i = 0; i < h1Element.length; i++)
{
    h1Element[i].onclick = function(e) {
        // nếu dùng h1Element[i] thì sẽ sai vì hàm này chạy xong rồi--> i = h1Element.length
        // --> h1Element[h1Element.length] sẽ sai
        // nó không có lắng nghe sự kiện vì nó là hàm
        // chỉ có trình duyệt lắng nghe sự kiện trong e và trả về trực tiếp khi click vào
        console.log(e.target)
    }
}
