import { Col, Row } from "antd";
import React from "react";
import Chatwindow from "./ChatWindow";
import SideBar from "./SideBar";

function ChatRoom() {
	return (
		<Row>
			<Col span={6}>
                <SideBar />
            </Col>
			<Col span={18}>
                <Chatwindow />
            </Col>
		</Row>
	);
}

export default ChatRoom;
