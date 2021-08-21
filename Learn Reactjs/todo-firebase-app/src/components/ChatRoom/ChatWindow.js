import React, { useContext, useMemo, useState } from "react";
import { Avatar, Button, Tooltip, Form, Input, Alert } from "antd";
import { UserAddOutlined } from "@ant-design/icons";
import styled from "styled-components";
import Message from "./Message";
import { AppContext } from "../Context/AppProvider";
import { AuthContext } from "../Context/AuthProvider";
import { addDocument } from "../firebase/services";
import useFirestore from "../hooks/useFirestore";

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
	const { selectedRoom, members, setIsInviteMemberVisible } =
		useContext(AppContext);
	const { uid, photoURL, displayName } = useContext(AuthContext);
	const [form] = Form.useForm();

	const [inputValue, setInputValue] = useState("");

	console.log("selectedRoom", { selectedRoom });

	const handleInputChange = (e) => {
		setInputValue(e.target.value);
	};

	const handleOnSubmit = () => {
		addDocument("messages", {
			text: inputValue,
			uid,
			photoURL,
			roomId: selectedRoom.id,
			displayName,
		});

		form.resetFields(["message"]);
	};

	const condition = useMemo(
		() => ({
			fieldName: "roomId",
			operator: "==",
			compareValue: selectedRoom.id,
		}),
		[selectedRoom.id]
	);

	const messages = useFirestore("messages", condition);
	console.log({ messages });

	return (
		<WrapperStyled>
			{selectedRoom.id ? (
				<>
					<HeaderStyled>
						<div className="room__info">
							<p className="room__name">{selectedRoom?.name}</p>
							<span className="room__descriptions">
								{selectedRoom?.description}
							</span>
						</div>
						<ButtonGroupStyled>
							<Button
								icon={<UserAddOutlined />}
								type="text"
								onClick={() => setIsInviteMemberVisible(true)}
							>
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
							{messages.map((mes) => (
								<Message
									key={mes.id}
									input={mes.text}
									photoURL={mes.photoURL}
									displayName={mes.displayName}
									createdAt={mes.createdAt}
								/>
							))}
						</MessageListStyled>
						<FormStyled form={form}>
							<Form.Item name="message">
								<Input
									onChange={handleInputChange}
									onPressEnter={handleOnSubmit}
									placeholder="Nhập tin nhắn..."
									bordered={false}
									autoComplete="off"
								/>
							</Form.Item>
							<Button type="primary" onClick={handleOnSubmit}>
								Gửi
							</Button>
						</FormStyled>
					</ContentStyled>
				</>
			) : (
				<Alert
					message="Hãy chọn phòng"
					type="info"
					showIcon
					style={{ margin: 5 }}
					closable
				/>
			)}
		</WrapperStyled>
	);
}

export default Chatwindow;
