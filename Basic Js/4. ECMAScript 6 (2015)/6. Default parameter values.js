

// function logger(log) {
//     if (typeof logger === 'undefined') {
//         log = 'gia tri mac dinh'
//     }
//     console.log(log)
// }


// ===> default
// function logger(log='gia tri mac dinh') {
//     console.log(log)
// }


function logger(log, type='log') {
    // console.log(object)
    // console.warn(object);
    // console.error(object)
    console[type](log);
}

logger('message','warn')
