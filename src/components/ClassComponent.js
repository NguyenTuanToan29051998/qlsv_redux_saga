
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import actionClass from '../actions/class_action'

import { Table, Modal, Input, Button, Space } from 'antd'


function ClassComponent() {
    const list_class = useSelector(state => state.cl.listClass);
    const dispatch = useDispatch();
    const [idClick, setIdClick] = useState("");
    const [isModalVisibleDeleteClass, setIsModalVisibleDeleteClass] = useState(false);
    const [isModalVisibleUpdateClass, setIsModalVisibleUpdateClass] = useState(false);
    const [isModalVisibleAddClass, setIsModalVisibleAddClass] = useState(false);
    const [classObj, setClassObj] = useState({
        ma_lop: '',
        ten_lop: '',
        dssv: [''],
        dsgv: [''],
    })
    const columnsClass = [
        {
            title: 'ID',
            dataIndex: 'ma_lop',
        },
        {
            title: 'NAME',
            dataIndex: 'ten_lop',
        },
        {
            title: 'STUDENT',
            dataIndex: 'dssv',
        },
        {
            title: 'TEACHER',
            dataIndex: 'dsgv',
        },
        {
            title: "ACTIONS",
            dataIndex: 'ma_lop',
            render: (ma_lop) => (
                <>
                    <Button onClick={() => updateDataClass(ma_lop)}> Sửa </Button>
                    <Button onClick={() => deleteDataClass(ma_lop)}> Xóa </Button>
                </>
            )
        }
    ];
    useEffect(() => {
        dispatch(actionClass.action.getDataClass());
    }, [])
    const deleteDataClass = (ma_lop) => {
        setIdClick(ma_lop)
        setIsModalVisibleDeleteClass(true);
    };
    const handleOkDeleteClass = () => {
        setIsModalVisibleDeleteClass(false);
        console.log(idClick);
        dispatch(actionClass.action.deleteClass(idClick))
    };

    const handleCancelDeleteClass = () => {
        setIsModalVisibleDeleteClass(false);
    };
    // sửa thông tin lop
    const updateDataClass = (ma_lop) => {
        setIsModalVisibleUpdateClass(true);
        setIdClick(ma_lop);

    };
    const handleOkUpdateClass = () => {
        setIsModalVisibleUpdateClass(false);
        dispatch(actionClass.action.updateClass(idClick, {
            ten_lop: classObj.ten_lop,
            dssv: classObj.dssv,
            dsgv: classObj.dsgv
        }))
    };

    const handleCancelUpdateClass = () => {
        setIsModalVisibleUpdateClass(false);
    };

    // thêm lop
    const addDataClass = () => {
        setIsModalVisibleAddClass(true);
    };
    const handleOkAddClass = () => {
        setIsModalVisibleAddClass(false);
        dispatch(actionClass.action.addNewClass({
            ma_lop: classObj.ma_lop,
            ten_lop: classObj.ten_lop,
            dssv: classObj.dssv,
            dsgv: classObj.dsgv
        }))
    };

    const handleCancelAddClass = () => {
        setIsModalVisibleAddClass(false);
    };
    const onSearch = value => {
        console.log(value);
    }

    const { Search } = Input;
    return (
        <div>
            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    allowClear onSearch={onSearch}
                    enterButton
                />
            </Space>
            <button onClick={() => addDataClass()}  >Thêm Lớp</button>
            <Table dataSource={list_class} columns={columnsClass} />
            <Modal title="Thông Báo" visible={isModalVisibleDeleteClass} onOk={() => { handleOkDeleteClass() }} onCancel={handleCancelDeleteClass}>
                <p>Bạn có muốn xóa Lớp không</p>
            </Modal>
            <Modal title="Thay đổi thông tin lớp" visible={isModalVisibleUpdateClass} onOk={() => { handleOkUpdateClass() }} onCancel={handleCancelUpdateClass}>
                <p>Tên Lớp</p>
                <Input placeholder="Nhập tên lớp" onChange={(e) => setClassObj({ ...classObj, ten_lop: e.target.value })} />
                <p>Sinh viên</p>
                <Input placeholder="Nhập mã sinh viên" onChange={(e) => setClassObj({ ...classObj, dssv: [e.target.value] })} />
                <p>Giáo viên</p>
                <Input placeholder="Nhập mã giáo viên" onChange={(e) => setClassObj({ ...classObj, dssv: [e.target.value] })} />

            </Modal>
            <Modal title="Thêm Lớp" visible={isModalVisibleAddClass} onOk={() => { handleOkAddClass() }} onCancel={handleCancelAddClass}>
                <p>Mã Lớp</p>
                <Input placeholder="Nhập Mã Lớp" onChange={(e) => setClassObj({ ...classObj, ma_lop: e.target.value })} />
                <p>Tên Lớp</p>
                <Input placeholder="Nhập tên lớp" onChange={(e) => setClassObj({ ...classObj, ten_lop: e.target.value })} />
                <p>Sinh viên</p>
                <Input placeholder="Nhập mã sinh viên" onChange={(e) => setClassObj({ ...classObj, dssv: [e.target.value] })} />
                <p>Giáo viên</p>
                <Input placeholder="Nhập mã giáo viên" onChange={(e) => setClassObj({ ...classObj, dssv: [e.target.value] })} />
            </Modal>
        </div>
    );
}

export default ClassComponent;