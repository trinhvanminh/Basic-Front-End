//  nên dùng for(var index in courses) để có thể duyệt hết ptu thực (bỏ qua ptu empty)

var date = 1232;
switch(date) {
    case 2: console.log('Hom nay la thu 2'); break;
    case 3:
        console.log('hom nay la thu 3');
        break;
    case 4:
        console.log('hom nay la thu 4');
        break;

    case 5:
    case 6:
    case 7:
        console.log('case 5,6,7');
        break;
    
    default:
        console.log('invalid number');
}


// for loop

// 1. for
// 2. for/in            lặp với key  
// 3. for/of            lặp với value
// 4. while 
// 5. do/while

// tương tự c/c++ | i có thể khai báo trước, nếu var i = 0 trước dòng for --> for( ; i < 5; i++)

for(var i = 0; i < 5; i++){
    console.log(i)
}


var myObject = {
    key:'value',
    a : function() {
        return 'abc';
    },
    2: 213,
}

for(var key in myObject){
    console.log(key)  // return 2, key, a --> order: number > string 
}

var myArray = [1,2,3];

for(var key in myArray){
    console.log(key)  // return key == index, 0, 1, 2
}


// tương tự với chuỗi string trả về key ~ index


//-------------------------------


// for / of không thể sử dụng với object một cách bình thường
for(var value of myArray){
    console.log(value)
}

// tương tự với chuỗi, .... 

// với object 

keys = Object.keys(myObject);
values = Object.values(myObject);

// sử dụng 2 dòng trên để duyệt qua