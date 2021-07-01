var inputElement = 
document.querySelector('input[type="text"]')



// để nhìn rõ thì nên chạy từng cái tránh xung đột

// 1. input

// gõ xong nhấp chuột chổ khác thì mới apply
inputElement.onchange = function(e) {
    console.log(e.target.value);
}
// thay đổi text trong input là nó sẽ console.log() ra
inputElement.oninput = function(e) {
    console.log(e.target.value)
}


// 2. checkbox 

var inputElement = 
document.querySelector('input[type="checkbox"]')

inputElement.onchange = function(e) {
    console.log(e.target.checked); //return true/false
}

// 3. select 

var selectElement = 
document.querySelector('select')

selectElement.onchange = function(e) {
    console.log(e.target.value); //return true/false
}

// 4. onkeypress không nhận ESC
// onkeyup / onkeydown

//keydown --> khi nào keyup thì input mới có dữ liệU
// ==> lần nhất thứ nhất keydown input sẽ không có gì để lấy vào e.target.value
// ==> sau khi thả ra tương ứng keyup 
// >>>>>> lần thứ hai bấm keydown thì do input đã đc ghi dữ liệu từ lần keyup trước
// nên giờ mới lưu vào

var inputElement = 
document.querySelector('input[type="text"]')

inputElement.onkeydown = function(e) {
    console.log(e.target.value); //return true/false
}


var inputElement = 
document.querySelector('input[type="text"]')

inputElement.onkeyup = function(e) {
    console.log(e.target.value); //return true/false
}

