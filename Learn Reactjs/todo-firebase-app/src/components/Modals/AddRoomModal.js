import { Modal, Form, Input } from 'antd'
import React, { useContext } from 'react'
import { AppContext } from '../Context/AppProvider'

function AddRoomModal() {
    const {isAddRoomVisible, setIsAddRoomVisible} = useContext(AppContext);
    const [form] = Form.useForm();

    const handleOk = () => {
        //add new room to firestore
        console.log({ formData: form.getFieldValue()}) 
        setIsAddRoomVisible(false)
    }
    const handleCancel = () => {
        setIsAddRoomVisible(false)
    }

    return (
        <div>
            <Modal
                title="Tạo phòng"
                visible={isAddRoomVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Form form={form}>
                    <Form.Item label="Tên phòng" name='name'>
                        <Input placeholder="Nhập tên phòng"/>
                    </Form.Item>
                    <Form.Item label="Mô tả" name='descriptions'>
                        <Input.TextArea placeholder="Nhập mô tả"/>
                    </Form.Item>
                </Form>
            </Modal>
        </div>
    )
}

export default AddRoomModal
