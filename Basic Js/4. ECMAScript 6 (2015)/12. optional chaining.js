// optional chaining (?.)

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining


// obj.val?.prop
// obj.val?.[expr]
// obj.arr?.[index]
// obj.func?.(args)

const obj = {
    name: 'Alice',
    cat: {
        name: 'Dinah',
        cat2: {
            name: 'Dinah',
            // cat3: {
            //     // name: 'Dinah'
            // }
        }
    }
}

// console.log(obj.cat?.cat2?.cat3?.name)
if (obj.cat.cat2.cat3?.name) {
    console.log(obj.cat.cat2.cat3.name)
}
else {
    console.log('không tồn tại cat3 hoặc cat3.name')
}


// kiểm tra function có tồn tại
const obj2 = {
    // getName(value) {
    //     console.log(value)
    // }
}

obj2.getName?.(123)

// hoặc có thể kiểm tra index list, ....