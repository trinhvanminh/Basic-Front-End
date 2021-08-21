import React from "react";
import Login from "./components/Login";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ChatRoom from "./components/ChatRoom";
import "./App.css";
import AuthProvider from "./components/Context/AuthProvider";
import AppProvider from "./components/Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMemberModal";

function App() {
	return (
		<BrowserRouter>
			<AuthProvider>
				<AppProvider>
					<Switch>
						<Route path="/login" component={Login} />
						<Route path="/" exact component={ChatRoom} />
					</Switch>
					<AddRoomModal />
					<InviteMemberModal />
				</AppProvider>
			</AuthProvider>
		</BrowserRouter>
	);
}

export default App;
