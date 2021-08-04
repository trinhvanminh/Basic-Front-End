import { Avatar, Button, Typography } from 'antd'
import React, { useContext } from 'react'
import styled from 'styled-components';
import { AuthContext } from '../Context/AuthProvider'

const UserInforStyled = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 12px 16px;
    border-bottom: 1px solid rgba(82, 38, 83);

    .user-info {
        display: flex;
        align-items: center;
        
        .display_name {
            color: white;
            margin-left: 5px;
        }
    }
`

function UserInfo() {
    const {displayName, photoURL} = useContext(AuthContext);
    return (
        <UserInforStyled>
            <div className='user-info'>
                <Avatar src={photoURL} alt="avatar"/>
                <Typography.Text className='display_name'>{displayName}</Typography.Text>
            </div>
            <Button ghost>Đăng xuất</Button>
        </UserInforStyled>
    )
}

export default UserInfo

