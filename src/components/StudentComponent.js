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
						<Button onClick={() => deleteST(ma_sv)} >X??a</Button>
						<Button onClick={() => updateST(ma_sv)} >S???a</Button>
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
			<button onClick={() => { addST() }}>TH??M SINH VI??N</button>
			<Table dataSource={list_student} columns={columnsST} />
			<Modal title="NH???P TH??NG TIN SINH VI??N" visible={isModalVisibleAddST} onOk={handleOkAddStudent} onCancel={handleCancelAddStudent}>
				<p>M?? Sinh Vi??n</p>
				<Input placeholder="Nh???p M?? sinh vi??n" onChange={(e) => setStudent({ ...student, ma_sv: e.target.value })} />
				<p>T??n Sinh Vi??n</p>
				<Input placeholder="Nh???p t??n sinh vi??n" onChange={(e) => setStudent({ ...student, ten_sv: e.target.value })} />
				<p>Gi???i T??nh</p>
				<Input placeholder="Nh???p gi???i t??nh sinh vi??n" onChange={(e) => setStudent({ ...student, gioi_tinh: e.target.value })} />
				<p>?????a Ch???</p>
				<Input placeholder="Nh???p gi???i t??nh sinh vi??n" onChange={(e) => setStudent({ ...student, que_quan: e.target.value })} />
				<p>L???p</p>
				<Input placeholder="Nh???p m?? l???p" onChange={(e) => setStudent({ ...student, ds_lop: [e.target.value] })} />
			</Modal>
			<Modal title="THAY ?????I TH??NG TIN SINH VI??N" visible={isModalVisibleUpdateST} onOk={() => { handleOkUpdateST() }} onCancel={handleCancelUpdateST}>
				<p>T??n Sinh Vi??n</p>
				<Input placeholder="Nh???p t??n sinh vi??n" onChange={(e) => setStudent({ ...student, ten_sv: e.target.value })} />
				<p>Gi???i T??nh</p>
				<Input placeholder="Nh???p gi???i t??nh sinh vi??n" onChange={(e) => setStudent({ ...student, gioi_tinh: e.target.value })} />
				<p>?????a Ch???</p>
				<Input placeholder="Nh???p gi???i t??nh sinh vi??n" onChange={(e) => setStudent({ ...student, que_quan: e.target.value })} />
				<p>L???p</p>
				<Input placeholder="Nh???p m?? l???p" onChange={(e) => setStudent({ ...student, ds_lop: [e.target.value] })} />
			</Modal>
			<Modal title="Th??ng B??o" visible={isModalVisibleDeleteST} onOk={() => { handleOkDeleteST() }} onCancel={handleCancelDeleteST}>
				<p>B???n c?? mu???n x??a gi??o vi??n kh??ng</p>
			</Modal>
			{/* {listStudent.length > 0 ? listStudent.map((value, index) => (
				<div>
					{value.ma_sv} |
					{value.ten_sv}|
					{value.gioi_tinh}|
					{value.que_quan}
					<button onClick={() => deleteST(value.ma_sv)} type='submit'>X??a</button>
					<button onClick={() => updateST(value.ma_sv)} type='submit'>S???a</button>
				</div>
			)) : <div>no data</div>} */}

		</div>

	)
}
export default StudentComponent;