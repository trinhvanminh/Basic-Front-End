import { createStore } from './core.js'
import reducer from './reducer.js'

//gọi tới createStore(với tham số truyền vào là reducer)
const { attach, connect, dispatch } = createStore(reducer)

//global variable
window.dispatch = dispatch

export {
    attach,
    connect
}