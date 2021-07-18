import html from '../core.js'
import { connect } from '../store.js'

const connector = connect()

//props: {{props: 'vi du'}, selector(state), ...[{args: 1}, {list_arg: 1, list_arg2: 2}]}
function App(props) {
    //chỉ lấy state cars
    let cars = props.cars
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('ADD', 'Porsche', 'abc')">Add car</button>
    `
}
export default connector(App)