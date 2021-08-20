import React, { useContext, useMemo } from "react";
import { Avatar, Button, Tooltip, Form, Input } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Message from "./Message";
import { AppContext } from "../Context/AppProvider";

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

const WrapperStyled = styled.div`
	height: 100vh;
`;

const ContentStyled = styled.div`
	height: calc(100% - 56px);
	display: flex;
	flex-direction: column;
	padding: 11px;
	justify-content: flex-end;
`;

const FormStyled = styled(Form)`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 2px 2px 2px 0;
	border: 1px solid rgb(230, 230, 230);
	border-radius: 2px;

	.ant-form-item {
		flex: 1;
		margin-bottom: 0;
	}
`;

const MessageListStyled = styled.div`
	max-height: 100%;
	overflow-y: auto;
`;

function Chatwindow() {
	const { selectedRoom, members } = useContext(AppContext);

	console.log("selectedRoom", { selectedRoom });

	return (
		<WrapperStyled>
			<HeaderStyled>
				<div className="room__info">
					<p className="room__name">{selectedRoom?.name}</p>
					<span className="room__descriptions">
						{selectedRoom?.description}
					</span>
				</div>
				<ButtonGroupStyled>
					<Button icon={<UserAddOutlined />} type="text">
						Mời
					</Button>

					<Avatar.Group size="small" maxCount={2}>
						{/* tooltip hiển thị thông tin khi hover title */}
						{members.map((member) => (
							<Tooltip
								title={member.displayName}
								key={member.id}
								placement="bottom"
							>
								<Avatar src={member.photoURL}>
									{member.photoURL
										? ""
										: member.displayName
												?.charAt(0)
												?.toUpperCase()}
								</Avatar>
							</Tooltip>
						))}
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
				<FormStyled>
					<Form.Item>
						<Input
							placeholder="Nhập tin nhắn..."
							bordered={false}
							autoComplete="off"
						/>
					</Form.Item>
					<Button>Gửi</Button>
				</FormStyled>
			</ContentStyled>
		</WrapperStyled>
	);
}

export default Chatwindow;
