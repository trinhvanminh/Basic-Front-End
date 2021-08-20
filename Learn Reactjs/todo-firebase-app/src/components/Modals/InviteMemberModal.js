import { Modal, Form, Select, Spin, Avatar } from "antd";

import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../Context/AppProvider";
import { AuthContext } from "../Context/AuthProvider";
import { addDocument } from "../firebase/services";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
	const [fetching, setFetching] = useState(false);
	const [options, setOptions] = useState([]);

	const debounceFetcher = useMemo(() => {
		setOptions([]);
		setFetching(true);

		fetchOptions(value).then((newOptions) => {
			setOptions(newOptions);
			setFetching(false);
		});

		return debounce(loadOptions, debounceTimeout);
	}, [debounceTimeout, fetchOptions]);

    return (
        <Select
            labelInValue
            onSearch={debounceFetcher}
            notFoundConten={fetching ? <Spin size="small"/> : null}
            {...props}
        >
            {
                // [{label ~ displayName, value~uid, photoURL}]
                options.map(opt => (
                    <Select.Option>
                        <Avatar size="small" src={opt.photoURL}>
                            {opt.photoURL ? '' : opt.displayName?.charAt(0)?.toUpperCase()}
                        </Avatar>
                        {`${opt.label}`}
                    </Select.Option>
                ))
            }
        </Select>
    )
}

function fetchUserList() {
    
}

function InviteMemberModal() {
	const { isInviteMemberVisible, setIsInviteMemberVisible } = useContext(AppContext);
    const [value, setValue] = useState('');

	const { uid } = useContext(AuthContext);

	const [form] = Form.useForm();

	const handleOk = () => {
		// reset from value
		form.resetFields();

		setIsAddRoomVisible(false);
	};
	const handleCancel = () => {
		// reset from value
		form.resetFields();
		setIsAddRoomVisible(false);
	};

	return (
		<div>
			<Modal
				title="Mời thêm thành viên"
				visible={isInviteMemberVisible}
				onOk={handleOk}
				onCancel={handleCancel}
			>
				<Form form={form} layout="vertical">
                    <DebounceSelect
                        mode="multiple"
                        lable="Tên các thành viên"
                        value={value}
                        placeholder="Nhập tên thành viên"
                        fetchOptions={fetchUserList}
                        onChange={newValue => setValue(newValue)}
                        style={{width: '100%'}}
                    >

                    </DebounceSelect>
                </Form>
			</Modal>
		</div>
	);
}

export default InviteMemberModal;
