import './App.css';
import db from './firebase'

function App() {
  //"todos" colection is created in firebase website
  console.log(db.colention('todos'))
  return (
    <div className="App">
      Learn React  
    </div>
  );
}

export default App;
