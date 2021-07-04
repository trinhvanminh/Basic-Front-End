//cách 1 export trực tiếp từ logger.js

// export const TYPE_LOG = 'log';
// export const TYPE_WARN = 'warn';
// export const TYPE_ERROR = 'error';
// mot module chỉ export một default

function logger(log, type='log') {
    console[type](log);
}


//cách 2 là tách tác TYPE_ thành file constant.js riêng
// dùng thằng nào thì import thằng đó
import {
    // TYPE_LOG, 
    // TYPE_ERROR, 
    TYPE_WARN
} from './constant.js'


export default logger;