import { Typography } from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import React from 'react'
import styled from 'styled-components';

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

function Message({input, displayName, createAt, photoURL}) {
    return (
        <div>
            <div>
                <Avatar src={photoURL}>A</Avatar>
                <Typography.Text className='author'>{displayName}</Typography.Text>
                <Typography.Text className='date'>{createAt}</Typography.Text>
            </div>
            <div>
                <Typography.Text className='content'>{input}</Typography.Text>
            </div>
        </div>
    )
}

export default Message
