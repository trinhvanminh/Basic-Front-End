
// 1. Định nghĩa key: value cho một object
// 2. Định nghĩa method cho object
// 3. Định nghĩa key cho object dưới dạng biến

////////////////////////////////

var name = 'JavaScript';
var price = 1000;

// var course = {
//     name: name,
//     price: price
// };

// ==> 1. Định nghĩa key: value cho một object
// nếu key == value có thể bỏ đi một cái

var course = {
    name,
    price,
    // getName:function() { return name}
    getName() {
        return name;
    }
};

// khai báo key với biến ở ngoài
var fieldName = 'name';
var fieldPrice = 1000;
// thêm dấu [biến_key]: value
const course = {
    [fieldName]: 'JavaScript',
    [fieldPrice]: 1000
}

