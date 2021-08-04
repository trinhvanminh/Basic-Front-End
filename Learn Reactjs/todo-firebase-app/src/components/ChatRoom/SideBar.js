import { Col, Row } from "antd";
import React from "react";
import styled from "styled-components";
import RoomList from "./RoomList";
import UserInfo from "./UserInfo";

const SideBarStyled = styled.div`
	background: #3f0e40;
	color: white;
	height: 100vh;
`;

function SideBar() {
	return (
		<SideBarStyled>
			<Row>
				{/* thong tin nguoi dung  va nut dang xuat*/}
				<Col span={24}>
					<UserInfo />
				</Col>
				{/* thong tin Rooms */}
				<Col span={24}>
					<RoomList />
				</Col>
			</Row>
		</SideBarStyled>
	);
}

export default SideBar;
