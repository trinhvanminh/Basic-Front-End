import { attach } from './store.js'
import App from './component/app.js'


//App = connector(App)
//app return component: function(), return html
attach(App, document.getElementById('root'))