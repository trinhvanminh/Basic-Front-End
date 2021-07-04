// https://github.com/airbnb/javascript?fbclid=IwAR1hP_GfaHbCPIHrEt9PjiotJZEz71aTE-Gc-RJcMyqjp0jVwLUq0guD5mA#modules


// dùng destructuring để nhận các export thường

////////////////////////////////

//cách 1
// import logger_name, {
//     TYPE_LOG, 
//     TYPE_ERROR, 
//     TYPE_WARN
// } from './logger.js'

// // console.log(logger)
// logger_name('test message',TYPE_WARN)


////////////////////////////////


//cách 2 là tách tác TYPE_ thành file constant.js riêng

import logger_name from './logger.js'

import {TYPE_WARN} from './constant.js'
logger_name('test message',TYPE_WARN)


// cách này k khuyến khích
// import * as object_type from './constant.js'
// logger_name('test message',object_type.TYPE_WARN)


////////////////////////////////

//cách 3

import export_from from './export from.js'
import {TYPE_LOG} from './constant.js'

export_from('test message_3', TYPE_LOG)