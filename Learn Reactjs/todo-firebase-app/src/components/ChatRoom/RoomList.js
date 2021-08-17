import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { AppContext } from "../Context/AppProvider";
import { AuthContext } from "../Context/AuthProvider";
import useFirestore from "../hooks/useFirestore";

//cac class cua ant-design (inspect) overwrite css lai
// &&& -> vao 3 cap -> vi du .cap1 .cap2 .cap3 .ant-collapse-header
const PanelStyled = styled(Collapse.Panel)`
	&&& {
		.ant-collapse-header {
			color: white;
		}
		.ant-collapse-content-box {
			padding: 0 40px;
		}
		.add-room {
			color: white;
			padding: 0;
		}
	}
`;

const LinkStyled = styled(Typography.Link)`
	display: block;
	margin-bottom: 5px;
	color: white;
`;

function RoomList() {
	const { rooms, setIsAddRoomVisible } = useContext(AppContext);

	const handleAddRoom = () => {
		setIsAddRoomVisible(true);
	};
	return (
		<Collapse ghost defaultActiveKey={["1"]}>
			<PanelStyled header="Danh sách các phòng" key="1">
				{rooms &&
					rooms.map((room) => (
						<LinkStyled key={room.id}>{room.name}</LinkStyled>
					))}
				<Button
					className="add-room"
					icon={<PlusSquareOutlined />}
					type="text"
					onClick={handleAddRoom}
				>
					Thêm phòng
				</Button>
			</PanelStyled>
		</Collapse>
	);
}

export default RoomList;
