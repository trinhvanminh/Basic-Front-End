var a = 1;
var b = 2;
if (a > 0 && b > 0){
    console.log('a va b lon hon 0')
}

// #Toán tử số học như Python

// --a, ++a, a++, a--  như c/c++


// 0, false, '', "", undefied, NaN, null  ------> return false


//number, string, boolean, undefined, null, symbol
//object, function 

var age;
console.log(age); //undefied

var id = Symbol('abc'); //unique
var id2 = Symbol('abc');

// id  == id2 --> false

//Oject = dict = hash table
// có thể chứa nhiều kiểu dữ liệu
var myObject = {
    name: 'minh',
    'abc':'xyz',
    1:3123213
};


var myArray = ['a',1,[1,2,3]];
// console.log(myArray);



var a = 1;
var b = '1';

// a == b --> true

// a === b --> false

// ===  so sánh tuyệt đối cả giá trị lẫn kiểu dữ liệu



var a = 'adasdasd';
var b = 'ôppopop';

console.log(`${a} cai gi do ${b}`);


// Làm việc với chuỗi

// 1. length
// 2. indexOf('str',start_number) ///      lastIndexOf() -> tìm từ cuối
// console.log(a.indexOf('zz')) // -1 nếu k tìm thấy, ngược lại trả về vị trí đầu tiên

// 3. search('str') --> tìm kiếm theo regex, ......

// 3.  slice(vitri_batdau)

// 4. replace('js','javascript') thay thế chữ js đầu tiên 
// dùng regex --> replace(/js/g,'javascript')


// 5. toUpperCase(), toLowerCase()

// 7. trim() = strip() loại bỏ khoảng trắng thừa 2 đầu


// 8. split('')

//9. charAt(index)



Number.isFinite(2 / 0); // false
Number.isFinite(20 / 5); // true
Number.isFinite(0 / 0); // false

Number.isInteger(999999999); // true
Number.isInteger(0.2);       // false
Number.isInteger(Math.PI);   // false

Number.parseFloat('10') // 10
Number.parseFloat('10.00') // 10
Number.parseFloat('238,21') // 238
Number.parseFloat('237.22') // 237.22
Number.parseFloat('34 56 78') // 34
Number.parseFloat(' 37 ') // 37
Number.parseFloat('18 is my age') // 18
Number.parseFloat('238dsfs21') //238

Number.parseInt('10') // 10
Number.parseInt('10.00') // 10
Number.parseInt('238,21') // 238
Number.parseInt('237.22') // 237
Number.parseInt('34 56 78') // 34
Number.parseInt(' 37 ') // 37
Number.parseInt('18 is my age') // 18

var numberObject = 1234.56789;

numberObject.toFixed(); // '1235'
numberObject.toFixed(1); // '1234.6'
numberObject.toFixed(6); // '1234.567890'

(11).toString();    // '11'
(18).toString();     // '18'
(17.3).toString();   // '17.3'


// khong the kiem tra == Nan chi co the dung isNaN(20/'abc')


// Arrayyyyyyyyyyyyyyyyyyyyyyyyyyy

var languages = ['a','b','c'];

// 1. languages.toString() --> a,b,c

// 2. languages.join() --> a,b,c || languages.join('') --> abc || languages.join('-') --> a-b-c

// 3. .pop() --> xoa ptu cuoi mang return cai pop ra (undefied if ko co gi de pop)

// 4 .push('asdas','asdasd') --> them 1 hoac nhieu ptu vao mang -- return chieu dai moi  

// 5. .shift()       --> giong pop nhung xoa ptu dau tien | undefined | left shift

// 6. .unshift('asd','asdas')      --> them 1 hoac nhieu ptu vao dau mang --> return do dai moi | giong push | right shift

// 7. .splice(index, so_luong_xoa_tu_index) 
// 7. .splice(index, 0, 'chen them tu vi tri index')
// 7. .splice(index, 1, 'thay the tai vi tri index') 
// 7. .splice(vi tri dat con tro, so luong xoa, 'chuoi moi') 

// 8. str1.concat(str2)  nối chuỗi

// 9. .slice(start, end)  || .slice(-2, -1)




// for (var element of list) {

// }



