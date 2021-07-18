const init = {
    cars: ['BMW','Porsche']
}

const actions = {
    add({ cars }, args) {
        cars.push(...args)
    }
}

export default function reducer(state = init, action, args) {
    actions[action] && actions[action](state, args)
    return state
}
