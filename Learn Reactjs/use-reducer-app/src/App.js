import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Services from "./components/Pages/Services";
import Products from "./components/Pages/Products";
import SignUp from "./components/Pages/SignUp";
import Footer from "./components/Footer";

function App() {
	return (
		<div className="App">
			<Router>
				<NavBar />
				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/home" exact component={Home} />
					<Route path="/services" exact component={Services} />
					<Route path="/products" exact component={Products} />
					<Route path="/sign-up" exact component={SignUp} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
