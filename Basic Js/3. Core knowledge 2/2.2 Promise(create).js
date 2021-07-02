//  Hai buoc tao promise
//  1. new Promise
//  2. Executor


// Promise có 3 mạng thái

// 1. Pending: Khi trong promise (
    // nếu promise không trả về cho resolve hoặc reject thì sẽ bị memnory leak)
// 2. Fullfilled: đã chuyển qua promise .then .catch .finally
// 3. Reject
var promise = new Promise(
    //Executor
    function(resolve, reject) {
        //  Logic
        //  Thành công: resolve()
        //  Thất bại: reject()

        //fake call API
        resolve([
            {
                id: 1,
                name: 'JavaScript'
            }
        ]);
        // reject('có lỗi');
    }
)

promise
    .then(function(course) {
        // console.log('Thanh cong')
        console.log(course)
    })
    .catch(function(error) {
        // console.log('That bai')
        console.log(error)
    })
    .finally(function() {
        console.log('Done')
    })



// Khi phỏng vấn

// 1. Khái niệM sinh ra để xử lý bất đồng bộ
// 2. Trước khi có promise thì ta sử dụng callback,
//    mà callback thì sẽ sỉnh ra callback hell
//    làm code xấu khó nhìn, khó xử lý khi mà sinh ra lỗi
//    --> dùng promise để giải quyết vấn đề trên (ES6)

// 3. Để tạo ra 1 promise thì sẽ sử dụng từ khoá new Promise
//    trong contructor của nó truyền vào excutor function với 2 tham số dạng hàm
//    resolve() khi thao tác xử lý thành công
//    reject() khi thao tác xử lý thất bại

// 4. Ta sẽ sử dụng promise qua phương thức 
//  promise.then (khi resolve() được gọi) 
//  promise.catch (khi reject() được gọi)