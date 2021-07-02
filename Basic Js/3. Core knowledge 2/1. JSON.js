// 1. DOM events / Event listener  --> OK
// 2. json          <--- current
// 2.5. promise
// 3. fetch
// 4. DOM loation
// 5. local storage
// 6. session storage
// 7. coding convention
// 8. best practices
// 9. mistakes
// 10. performance



// 1. JSON: JavaScript Object Notation
// 2. Là một kiểu định dạng dữ liệu (chuỗi) - viết trong dấu '<giá trị>'
// 3. JSON: Number, String, Boolean, Null, Array, Object:  (giá trị)

// Stringify / Parse ~ string to JSON / JSON to string

// ví dụ json = '<Number/Boolean/Null/Array/Object>'
var json = '1'      //Number
var json = 'true'  //Boolean
var json = 'false'  
var json = 'null'   
var json = '"string"'   //string
var json = '["JavaScript", "PHP", "Ruby"]'  //Array
var json = '{"name":"minh","cu_phap":"giong nhu dict python"}'  //Object

// phân tích cú pháp JSON
console.log(JSON.parse(json))


// chuyển thành json

var js = true;
console.log(JSON.stringify(js)) // JSON có dạng chuỗi --> return true dạng chuỗi



console.log(JSON.stringify({
    name: "minh",
    cu_phap: "giong nhu dict python"
})) // JSON có dạng chuỗi --> return {"name":"minh","cu_phap":"giong nhu dict python"}

