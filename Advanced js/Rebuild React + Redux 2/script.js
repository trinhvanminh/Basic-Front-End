import { attach } from './store.js'
import app from './component/app.js'


//App = connector(App)
//app return component: function(), return html
attach(app, document.getElementById('root'))