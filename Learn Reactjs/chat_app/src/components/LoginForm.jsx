import { useState } from "react";
import axios from "axios";

const LoginForm = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const handleSubmit = async (e) => {
		e.preventDefault();
		const authObject = {
			"Project-ID": "5f82c80e-7ab4-4c10-9b45-6c1fb42ac7ff",
			"User-Name": username,
			"User-Secret": password,
		};
		try {
			//username | password => chat engine -> give messages
			await axios.get("https://api.chatengine.io/chats", {
				headers: authObject,
			});
			//works out  -> logged in
			localStorage.setItem("username", username);
			localStorage.setItem("password", password);
			window.location.reload();
		} catch (error) {
			//error --> try new username...
			setError("Opps, incorrect credentials");
		}
	};

	return (
		<div className="wrapper">
			<div className="form">
				<h1 className="title">Chat App</h1>
				<form onSubmit={handleSubmit}>
					<input
						type="text"
						value={username}
						onChange={(e) => setUsername(e.target.value)}
						className="input"
						placeholder="Username"
						required
					/>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="input"
						placeholder="Password"
						required
					/>
					<div align="center">
						<button className="button" type="submit">
							<span>Start Chatting</span>
						</button>
						<h2 className="error">{error}</h2>
					</div>
				</form>
			</div>
		</div>
	);
};

export default LoginForm;
