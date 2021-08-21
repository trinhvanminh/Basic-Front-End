import { Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import { formatRelative } from "date-fns/esm";
import React from "react";
import styled from "styled-components";

const WrapperStyled = styled.div`
	margin-bottom: 10px;

	.author {
		margin-left: 5px;
		font-weight: bold;
	}
	.date {
		margin-left: 10px;
		font-size: 11px;
		color: #a7a7a7;
	}
	.content {
		margin-left: 30px;
	}
`;

const formatDate = (seconds) => {
	let formattedDate = "";

	if (seconds) {
		formattedDate = formatRelative(new Date(seconds * 1000), new Date());

		formattedDate =
			formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
	}

	return formattedDate;
};

function Message({ input, displayName, createdAt, photoURL }) {
	return (
		<WrapperStyled>
			<div>
				<Avatar size="small" src={photoURL}>
					{photoURL ? "" : displayName?.charAt(0)?.toUpperCase()}
				</Avatar>
				<Typography.Text className="author">
					{displayName}
				</Typography.Text>
				<Typography.Text className="date">
					{formatDate(createdAt?.seconds)}
				</Typography.Text>
			</div>
			<div>
				<Typography.Text className="content">{input}</Typography.Text>
			</div>
		</WrapperStyled>
	);
}

export default Message;
