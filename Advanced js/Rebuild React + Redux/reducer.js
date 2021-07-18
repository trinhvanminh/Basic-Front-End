const init = {
    cars: ['BMW'], 
    shit: '123'
}

//state = {cars: ['BMW']}, action='ADD', args = ['Porsche','Mercedes']
export default function reducer(state = init, action, args) {
    switch (action) {
        case 'ADD':
            //['Porsche','Mercedes']
            const newCars = args 
            return {
                ...state, //get current state
                cars: [...state.cars, ...newCars] //update state with new cars: ['BMW','Porsche','Mercedes']
            }
        default:
            return state
    }
}