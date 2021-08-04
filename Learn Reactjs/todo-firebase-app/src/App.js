import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import "./App.css";
import AuthProvider from "./components/Context/AuthProvider";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<Switch>
					<Route path="/login" component={Login} />
					<Route path="/" exact component={ChatRoom} />
				</Switch>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
