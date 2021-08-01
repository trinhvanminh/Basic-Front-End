import React from "react";
import { ChatEngine } from "react-chat-engine";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";
import "./App.css";

export default function App() {
	if (!localStorage.getItem("username")) return <LoginForm />;
	return (
		<ChatEngine
			height="100vh"
			userName={localStorage.getItem("username")}
			userSecret={localStorage.getItem("password")}
			projectID="5f82c80e-7ab4-4c10-9b45-6c1fb42ac7ff"
			renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
		/>
	);
}
