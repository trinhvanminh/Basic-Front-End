import html from '../core.js'
import { connect } from '../store.js'


//props: {{props: 'vi du'}, selector(state), ...[{args: 1}, {list_arg: 1, list_arg2: 2}]}
function app(props){
    let cars = props.cars
    return html`
        <ul>
            ${cars.map(car => `<li>${car}</li>`)}
        </ul>
        <button onclick="dispatch('add','VinFast','VinSlow')">Add car</button>
    `
}

export default connect()(app)