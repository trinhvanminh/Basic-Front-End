import React from "react";
import { Avatar, Button, Tooltip, Form, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Message from "./Message";

const HeaderStyled = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 16px;
	height: 56px;
	border-bottom: 1px solid rgb(230, 230, 230);
	.room {
		&__info {
			display: flex;
			flex-direction: column;
			justify-content: center;
		}
		&__name {
			margin: 0;
			font-weight: bold;
		}
		&__description {
			font-size: 12px;
		}
	}
`;

const ButtonGroupStyled = styled.div`
	display: flex;
	align-items: center;
`;

const ContentStyled = styled.div``;

const MessageListStyled = styled.div``;

function Chatwindow() {
	return (
		<div>
			<HeaderStyled>
				<div className="room__info">
					<p className="room__name">Room 1</p>
					<span className="room__descriptions">Đây là Room 1</span>
				</div>
				<ButtonGroupStyled>
					<Button icon={<UserAddOutlined />} type="text">
						Mời
					</Button>

					<Avatar.Group size="small" maxCount={2}>
						{/* tooltip hiển thị thông tin khi hover title */}
						<Tooltip title="A" placement="bottom">
							<Avatar>A</Avatar>
						</Tooltip>
						<Tooltip title="B" placement="bottom">
							<Avatar>B</Avatar>
						</Tooltip>
						<Tooltip title="C" placement="bottom">
							<Avatar>C</Avatar>
						</Tooltip>
						<Tooltip title="D" placement="bottom">
							<Avatar>D</Avatar>
						</Tooltip>
					</Avatar.Group>
				</ButtonGroupStyled>
			</HeaderStyled>

			<ContentStyled>
				<MessageListStyled>
					<Message
						input="test"
						photoURL={null}
						displayName={"A"}
						createAt={123123123}
					/>
					<Message
						input="test"
						photoURL={null}
						displayName={"A"}
						createAt={123123123}
					/>
					<Message
						input="test"
						photoURL={null}
						displayName={"A"}
						createAt={123123123}
					/>
					<Message
						input="test"
						photoURL={null}
						displayName={"A"}
						createAt={123123123}
					/>
				</MessageListStyled>
				<Form>
					<Form.Item>
						<Input />
					</Form.Item>
					<Button>Gửi</Button>
				</Form>
			</ContentStyled>
		</div>
	);
};

export default Chatwindow;
