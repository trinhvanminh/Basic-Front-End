



var promise = new Promise(
    //Executor
    function(resolve, reject) {
        resolve();
        // reject('có lỗi');
    }
)
/// ---------------- CHAIN --------------------------
// kết quả return của .then thứ nhất sẽ là đối số đầu vào của then tiếp theo
// tương tự với các then sau
promise
    // first 
    .then(function() {
        return 'value of first then'
    })
    // second
    .then(function(data_from_first_then) {
        console.log('second then clg: ', data_from_first_then)
        return 'value of second then'
    })
    // third 
    .then(function(data_from_second_then) {
        console.log('third then clg: ', data_from_second_then)
        return 'value of third then'
    })
    // n-th 
    .then(function(data_from_third_then) {
        console.log('n-th then clg: ', data_from_third_then)
        return 'value of n-th then'
    })
    .catch(function(error) {
        // console.log('That bai')
        console.log(error)
    })
    .finally(function() {
        console.log('Done')
    })



// addition
// https://fullstack.edu.vn/learning/javascript-co-ban?id=2350

var promise = new Promise(
    //Executor
    function(resolve, reject) {
        resolve();
        // reject('có lỗi');
    }
)

promise
    .then(function() {
        return new Promise(function(resolve) {
            setTimeout(() => {
                // return resolve([1,2,3])
                resolve([1,2,3])
            }, 3000);
        })
    })

    // .then này sẽ là thuộc tính của Promise của first then phía trên
    .then(function(data_from_first_then) {
        console.log('--------------------addition result-----------------------');
        console.log(data_from_first_then)
    })
    .catch(function(error) {
        // console.log('That bai')
        console.log(error)
    })
    .finally(function() {
        console.log('Done')
    })




// More

function sleep(ms) {
    return new Promise(function(resolve) {
        setTimeout(resolve, ms);
    })
}

sleep(1000)
    .then(function() {
        console.log('----------------------------More-----------------------------')
        console.log(1)
        return sleep(1000)
    })

    .then(function() {
        console.log(2)
        return sleep(1000)
    })
    .then(function() {
        console.log(3)
        return sleep(1000)
    })
    .then(function() {
        console.log(4)
        return sleep(1000)
    })


console.log('\n-------------think about mutil thread python-------------------\n')