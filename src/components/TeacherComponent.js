
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionTeacher from '../actions/teacher_action'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Table, Modal, Input, Button, Space } from 'antd'

function TeacherComponent() {

    const list_teacher = useSelector(state => state.tc.listTeacher);
    const dispatch = useDispatch();
    const [idClick, setIdClick] = useState("");
    // const [nameTeacher, setNameTeacher] = useState("");
    // const [genderTC, setGenderTeacher] = useState("");
    // const [addressTC, setAddressTeacher] = useState("");
    const [isModalVisibleDeleteTeacher, setIsModalVisibleDeleteTeacher] = useState(false);
    const [isModalVisibleUpdateTeacher, setIsModalVisibleUpdateTeacher] = useState(false);
    const [isModalVisibleAddTeacher, setIsModalVisibleAddTeacher] = useState(false);
    useEffect(() => {
        dispatch(actionTeacher.action.getDataTeacher());
    }, [])
    const [teacher, setTeacher] = useState({
        ma_gv: '',
        ten_gv: '',
        gioi_tinh: '',
        que_quan: '',
        ds_lop: ['']
    })
    const columnsTeacher = [
        {
            title: 'ID',
            dataIndex: 'ma_gv',
        },
        {
            title: 'NAME',
            dataIndex: 'ten_gv',
        },
        {
            title: 'GENDER',
            dataIndex: 'gioi_tinh',
        },
        {
            title: 'ADDRESS',
            dataIndex: 'que_quan',
        },
        {
            title: 'CLASS',
            dataIndex: 'ds_lop',
        },
        {
            title: "ACTIONS",
            dataIndex: 'ma_gv',
            render: (ma_gv) => (
                <>
                    <Button onClick={() => updateDataTeacher(ma_gv)}> Sửa </Button>
                    <Button onClick={() => deleteDataTeacher(ma_gv)} >Xóa </Button>
                </>
            )
        }
    ];
    const deleteDataTeacher = (ma_gv) => {
        setIdClick(ma_gv)
        setIsModalVisibleDeleteTeacher(true);
    };
    const handleOkDeleteTeacher = () => {
        setIsModalVisibleDeleteTeacher(false);

    };

    const handleCancelDeleteTeacher = () => {
        setIsModalVisibleDeleteTeacher(false);
    };
    // sửa thông tin giáo viên
    const updateDataTeacher = (ma_gv) => {
        setIdClick(ma_gv);
        setIsModalVisibleUpdateTeacher(true);


    };
    const handleOkUpdateTeacher = () => {
        setIsModalVisibleUpdateTeacher(false);

    };

    const handleCancelUpdateTeacher = () => {
        setIsModalVisibleUpdateTeacher(false);
    };

    // thêm giáo viên
    const addDataTeacher = () => {
        setIsModalVisibleAddTeacher(true);
    };
    const handleOkAddTeacher = () => {
        setIsModalVisibleAddTeacher(false);
        dispatch(actionTeacher.action.addNewTeacher({
            ma_gv: teacher.ma_gv,
            ten_gv: teacher.ten_gv,
            gioi_tinh: teacher.gioi_tinh,
            que_quan: teacher.que_quan,
            ds_lop: teacher.ds_lop
        }))

    }
    const handleCancelAddTeacher = () => {
        setIsModalVisibleAddTeacher(false);
    };

    // const onChangeIdTeacher = (event) => {
    //     setIdClick(event.target.value);
    // }
    // const onChangeNameTeacher = (event) => {
    //     setNameTeacher(event.target.value);
    // }
    // const onChangeGenderTeacher = (event) => {
    //     setGenderTeacher(event.target.value);
    // }
    // const onChangeAddressTeacher = (event) => {
    //     setAddressTeacher(event.target.value);
    // }
    const { Search } = Input
    const onSearch = value => {
        console.log(value);
    }
    return (
        <div>
            <Space direction="vertical">
                <Search
                    placeholder="input search text"
                    allowClear onSearch={onSearch}
                    enterButton
                />
            </Space>
            <button onClick={() => addDataTeacher()}  >Thêm Giáo Viên</button>
            <Table dataSource={list_teacher} columns={columnsTeacher} />
            <Modal title="Thông Báo" visible={isModalVisibleDeleteTeacher} onOk={() => { handleOkDeleteTeacher() }} onCancel={handleCancelDeleteTeacher}>
                <p>Bạn có muốn xóa giáo viên không</p>
            </Modal>
            <Modal title="Thay đổi thông tin giáo viên" visible={isModalVisibleUpdateTeacher} onOk={() => { handleOkUpdateTeacher() }} onCancel={handleCancelUpdateTeacher}>
                <p>Tên Giáo Viên</p>
                <Input placeholder="Nhập tên giáo viên" onChange={(e) => setTeacher({ ...teacher, ten_gv: e.target.value })} />
                <p>Giới Tính</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, gioi_tinh: e.target.value })} />
                <p>Địa Chỉ</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, que_quan: e.target.value })} />
                <p>Lớp</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, ds_lop: [e.target.value] })} />
            </Modal>
            <Modal title="Thêm sinh viên" visible={isModalVisibleAddTeacher} onOk={() => { handleOkAddTeacher() }} onCancel={handleCancelAddTeacher}>
                <p>Mã Giáo Viên</p>
                <Input placeholder="Nhập Mã giáo viên" onChange={(e) => setTeacher({ ...teacher, ma_gv: e.target.value })} />
                <p>Tên Giáo Viên</p>
                <Input placeholder="Nhập tên giáo viên" onChange={(e) => setTeacher({ ...teacher, ten_gv: e.target.value })} />
                <p>Giới Tính</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, gioi_tinh: e.target.value })} />
                <p>Địa Chỉ</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, que_quan: e.target.value })} />
                <p>Lớp</p>
                <Input placeholder="Nhập giới tính giáo viên" onChange={(e) => setTeacher({ ...teacher, ds_lop: [e.target.value] })} />
            </Modal>s
        </div>
    );
}
export default TeacherComponent;