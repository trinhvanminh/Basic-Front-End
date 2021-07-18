export default function html([first, ...strings], ...values) {
    return values.reduce(
        (acc, cur) => acc.concat(cur, strings.shift()),
        [first]
    )
    .filter(x => x && x !== true || x === 0)
    .join('')
}

export function createStore(reducer) {
    let state = reducer()
    const roots = new Map()
    //lặp qua các component và gắn html trả về từ component cho vị trí root
    function render() {
        for(const [root, component] of roots) {
            const output = component()
            root.innerHTML = output
        }
    }
    return {
        //attach root(nơi innerHTML): component(return html)
        attach(component, root) {
            roots.set(root, component)
            render()
        },
        //return state
        connect(selector = state => state) {
            //props va args là những tham số muốn truyền thêm vào để return ra component --> ra view
            return component => (props, ...args) => {
                return component(Object.assign({}, props, selector(state), ...args)) 
            }
        },
        //thực thi các hành động -> gọi tới reducer return lại newstate
        dispatch(action, ...args) {
            state = reducer(state, action, args)
            render()
        }
    }
}