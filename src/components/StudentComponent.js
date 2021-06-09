import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import actionStudent from '../actions/student_action'

import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

import { Table, Modal, Input, Button, Space } from 'antd'

function StudentComponent() {
	const list_student = useSelector(state => state.st.listStudent);
	const dispatch = useDispatch();
	const [idClick, setIdClick] = useState("");
	const [isModalVisibleAddST, setIsModalVisibleAddST] = useState(false);
	const [isModalVisibleUpdateST, setIsModalVisibleUpdateST] = useState(false);
	const [isModalVisibleDeleteST, setIsModalVisibleDeleteST] = useState(false);

	const [student, setStudent] = useState({
		ma_sv: '',
		ten_sv: '',
		gioi_tinh: '',
		que_quan: '',
		ds_lop: ['']
	})
	useEffect(() => {
		dispatch(actionStudent.action.getDataStudent());
	}, [])

	const addST = () => {
		setIsModalVisibleAddST(true);
	}
	const handleOkAddStudent = () => {
		setIsModalVisibleAddST(false);
		dispatch(actionStudent.action.addNewStudent({
			ma_sv: student.ma_sv,
			ten_sv: student.ten_sv,
			gioi_tinh: student.gioi_tinh,
			que_quan: student.que_quan,
			ds_lop: student.ds_lop
		}));
	};
	const handleCancelAddStudent = () => {
		setIsModalVisibleAddST(false);
	};

	const updateST = (ma_sv) => {
		setIdClick(ma_sv);
		setIsModalVisibleUpdateST(true);

	}
	const handleOkUpdateST = () => {
		setIsModalVisibleUpdateST(false);
		dispatch(actionStudent.action.updateStudent(idClick, {
			ten_sv: student.ten_sv,
			gioi_tinh: student.gioi_tinh,
			que_quan: student.que_quan,
			ds_lop: student.ds_lop
		}));
	};
	const handleCancelUpdateST = () => {
		setIsModalVisibleUpdateST(false);
	};

	const deleteST = (idClick) => {
		setIdClick(idClick);
		setIsModalVisibleDeleteST(true);
	}
	const handleOkDeleteST = () => {
		setIdClick();
		setIsModalVisibleDeleteST(false);
		dispatch(actionStudent.action.deleteStudent(idClick))
	};
	const handleCancelDeleteST = () => {
		setIsModalVisibleDeleteST(false);
	};

	const onSearch = value => {
		console.log(value);
		dispatch(actionStudent.action.findStudent(value))
	}
	const columnsST = [
		{
			title: 'ID',
			dataIndex: 'ma_sv',
		},
		{
			title: 'NAME',
			dataIndex: 'ten_sv',
		},
		{
			title: 'GENDER',
			dataIndex: 'gioi_tinh',
		},
		{
			title: 'ADDRESS',
			dataIndex: 'gioi_tinh',
		},
		{
			title: 'CLASS',
			dataIndex: 'ds_lop',
		},
		{
			title: "ACTIONS",
			dataIndex: 'ma_sv',
			render: (ma_sv) => (
				<>
					<div>
						<Button onClick={() => deleteST(ma_sv)} >Xóa</Button>
						<Button onClick={() => updateST(ma_sv)} >Sửa</Button>
					</div>

				</>
			)
		}
	];
	const { Search } = Input;

	return (
		<div >
			<Space direction="vertical">
				<Search
					placeholder="input search text"
					allowClear onSearch={onSearch}
					enterButton
				/>
			</Space>
			<button onClick={() => { addST() }}>THÊM SINH VIÊN</button>
			<Table dataSource={list_student} columns={columnsST} />
			<Modal title="NHẬP THÔNG TIN SINH VIÊN" visible={isModalVisibleAddST} onOk={handleOkAddStudent} onCancel={handleCancelAddStudent}>
				<p>Mã Sinh Viên</p>
				<Input placeholder="Nhập Mã sinh viên" onChange={(e) => setStudent({ ...student, ma_sv: e.target.value })} />
				<p>Tên Sinh Viên</p>
				<Input placeholder="Nhập tên sinh viên" onChange={(e) => setStudent({ ...student, ten_sv: e.target.value })} />
				<p>Giới Tính</p>
				<Input placeholder="Nhập giới tính sinh viên" onChange={(e) => setStudent({ ...student, gioi_tinh: e.target.value })} />
				<p>Địa Chỉ</p>
				<Input placeholder="Nhập giới tính sinh viên" onChange={(e) => setStudent({ ...student, que_quan: e.target.value })} />
				<p>Lớp</p>
				<Input placeholder="Nhập mã lớp" onChange={(e) => setStudent({ ...student, ds_lop: [e.target.value] })} />
			</Modal>
			<Modal title="THAY ĐỔI THÔNG TIN SINH VIÊN" visible={isModalVisibleUpdateST} onOk={() => { handleOkUpdateST() }} onCancel={handleCancelUpdateST}>
				<p>Tên Sinh Viên</p>
				<Input placeholder="Nhập tên sinh viên" onChange={(e) => setStudent({ ...student, ten_sv: e.target.value })} />
				<p>Giới Tính</p>
				<Input placeholder="Nhập giới tính sinh viên" onChange={(e) => setStudent({ ...student, gioi_tinh: e.target.value })} />
				<p>Địa Chỉ</p>
				<Input placeholder="Nhập giới tính sinh viên" onChange={(e) => setStudent({ ...student, que_quan: e.target.value })} />
				<p>Lớp</p>
				<Input placeholder="Nhập mã lớp" onChange={(e) => setStudent({ ...student, ds_lop: [e.target.value] })} />
			</Modal>
			<Modal title="Thông Báo" visible={isModalVisibleDeleteST} onOk={() => { handleOkDeleteST() }} onCancel={handleCancelDeleteST}>
				<p>Bạn có muốn xóa giáo viên không</p>
			</Modal>
			{/* {listStudent.length > 0 ? listStudent.map((value, index) => (
				<div>
					{value.ma_sv} |
					{value.ten_sv}|
					{value.gioi_tinh}|
					{value.que_quan}
					<button onClick={() => deleteST(value.ma_sv)} type='submit'>Xóa</button>
					<button onClick={() => updateST(value.ma_sv)} type='submit'>Sửa</button>
				</div>
			)) : <div>no data</div>} */}

		</div>

	)
}
export default StudentComponent;