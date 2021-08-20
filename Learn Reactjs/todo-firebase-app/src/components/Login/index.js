import React from "react";
import { Row, Col, Button, Typography } from "antd";
import firebase, { auth } from "../firebase/config";
import { addDocument } from "../firebase/services";
import { FacebookOutlined, GooglePlusOutlined } from "@ant-design/icons";

function Login() {
	const fbProvider = new firebase.auth.FacebookAuthProvider();

	const { Title } = Typography;

	const handleFbLogin = async () => {
		const data = await auth.signInWithPopup(fbProvider);
		console.log('data')
		console.log({ data });
		const { additionalUserInfo, user } = data;
		if (additionalUserInfo?.isNewUser) {
			addDocument("users", {
				displayName: user.displayName,
				email: user.email,
				photoURL: user.photoURL,
				uid: user.uid,
				providerId: additionalUserInfo.providerId,
			});
		}
	};

	return (
		<div>
			<Row justify="center" style={{ height: 800 }}>
				{/* span 8/24 (chiem 8 cot tren 24 cot) */}
				<Col span={8}>
					{/* level={2} --> h2 */}
					<Title style={{ textAlign: "center" }} level={2}>
						Chat App
					</Title>

					<Button
						style={{ width: "100%", marginBottom: "8px" }}
						icon={<GooglePlusOutlined />}
					>
						Đăng nhập với Google
					</Button>
					<Button
						style={{ width: "100%" }}
						onClick={handleFbLogin}
						icon={<FacebookOutlined />}
					>
						Đăng nhập với Facebook
					</Button>
				</Col>
			</Row>
		</div>
	);
}

export default Login;
