import { PlusSquareOutlined } from "@ant-design/icons";
import { Button, Collapse, Typography } from "antd";
import React from "react";
import styled from "styled-components";

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
	return (
		<Collapse ghost defaultActiveKey={["1"]}>
			<PanelStyled header="Danh sách các phòng" key="1">
				<LinkStyled>Room 1</LinkStyled>
				<LinkStyled>Room 2</LinkStyled>
				<LinkStyled>Room 3</LinkStyled>
                <Button className='add-room' icon={<PlusSquareOutlined />} type='text' >
                    Thêm phòng
                </Button>
			</PanelStyled>
		</Collapse>
	);
}

export default RoomList;
