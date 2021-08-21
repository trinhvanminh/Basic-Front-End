import React, { useContext, useMemo, useState } from "react";
import { Modal, Form, Select, Spin, Avatar } from "antd";
import { debounce } from "lodash";

import { AppContext } from "../Context/AppProvider";
import { AuthContext } from "../Context/AuthProvider";
import { db } from "../firebase/config";

function DebounceSelect({ fetchOptions, debounceTimeout = 300, ...props }) {
	const [fetching, setFetching] = useState(false);
	const [options, setOptions] = useState([]);

	const debounceFetcher = useMemo(() => {
		const loadOptions = (value) => {
			setOptions([]);
			setFetching(true);

			fetchOptions(value, props.curMembers).then((newOptions) => {
				setOptions(newOptions);
				setFetching(false);
			});
		};

		return debounce(loadOptions, debounceTimeout);
	}, [debounceTimeout, fetchOptions]);

	return (
		<Select
			labelInValue
			filterOption={false}
			onSearch={debounceFetcher}
			notFoundConten={fetching ? <Spin size="small" /> : null}
			{...props}
		>
			{
				// [{label ~ displayName, value~uid, photoURL}]
				options.map((opt) => (
					<Select.Option
						key={opt.value}
						value={opt.value}
						title={opt.label}
					>
						<Avatar
							size="small"
							src={opt.photoURL}
							style={{ marginRight: 8 }}
						>
							{opt.photoURL
								? ""
								: opt.label?.charAt(0)?.toUpperCase()}
						</Avatar>
						{opt.label}
					</Select.Option>
				))
			}
		</Select>
	);
}

async function fetchUserList(search, curMembers) {
	return db
		.collection("users")
		.where("keywords", "array-contains", search.toLowerCase())
		.orderBy("displayName")
		.limit(20)
		.get()
		.then((snapshot) => {
			return snapshot.docs.map((doc) => ({
				label: doc.data().displayName,
				value: doc.data().uid,
				photoURL: doc.data().photoURL,
			}).fitler(opt => !curMembers.includes(opt.value)));
		});
}

function InviteMemberModal() {
	const {
		isInviteMemberVisible,
		setIsInviteMemberVisible,
		selectedRoomId,
		selectedRoom,
	} = useContext(AppContext);
	const [value, setValue] = useState("");

	const { uid } = useContext(AuthContext);

	const [form] = Form.useForm();

	const handleOk = () => {
		// reset form value
		form.resetFields();

		//update members in current room
		const roomRef = db.collection("rooms").doc(selectedRoomId);

		roomRef.update({
			members: [
				...selectedRoom.members,
				...value.map((val) => val.value),
			],
		});

		setIsInviteMemberVisible(false);
	};
	const handleCancel = () => {
		// reset form value
		form.resetFields();
		setIsInviteMemberVisible(false);
	};
	console.log({ value });
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
						onChange={(newValue) => setValue(newValue)}
						curMembers={selectedRoom.members}
						style={{ width: "100%" }}
					></DebounceSelect>
				</Form>
			</Modal>
		</div>
	);
}

export default InviteMemberModal;
