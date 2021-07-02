
// 1. Promise.resolve
// 2. Promise.reject
// 3. Promise.all


//Khi muốn trả thẳng trực tiếp một promise

// var promise = Promise.resolve('Success!')
var promise = Promise.reject('Error!!!')
promise
    .then(function(result) {
        console.log('result:', result)
    })
    .catch(function(err) {
        console.log('err:', err)
    })


// promise.all --> mutl thread
var promise1 = new Promise(
    //Executor
    function(resolve, reject) {
        setTimeout(function() {
            resolve([1])
        },1000);
    }
);

var promise2 = new Promise(
    //Executor
    function(resolve, reject) {
        setTimeout(function() {
            resolve([2,3]);
        },2000);
    }
);

var promise2 = Promise.reject('co loi')

// chay dong thoi, song song 2 promise
// khi nao tat ca promise trong promise.all done --> thi moi return
Promise.all([promise1, promise2])
    .then(function(result) {
        // console.log(result) //[ [ 1 ], [ 2, 3 ] ]
        // console.log(result[0].concat(result[1])) //[1,2,3]
        return result[0].concat(result[1])
    })
    // chỉ cần 1 trong tất cả các promise1 2 3 bị reject thì nó chạy vào catch (line 38)
    .catch(function(err){
        console.log(err)
    })