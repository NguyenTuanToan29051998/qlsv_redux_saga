import axios from "axios";
import { takeEvery, put, all } from "redux-saga/effects";
import actionStudent from '../actions/student_action'
import actionClass from '../actions/class_action'
import actionTeacher from '../actions/teacher_action'

function* getDataStudent() {
	let data;
	yield axios
		.get("http://localhost:8080/v1/student/list/")
		.then(function (res) {
			data = res.data;
		})
		.catch(function (err) {
			console.log(err);
		});

	yield put({ type: actionStudent.type.GET_DATA_STUDENT_SUCCESS, payload: data });
}
function* addNewStudent(action) {
	yield axios
		.post('http://localhost:8080/v1/student/', action.payload.student)

	yield getDataStudent()
}
function* deleteStudent(action) {
	yield axios
		.delete(`http://localhost:8080/v1/student/${action.payload.id}`)
	yield getDataStudent()
}
function* updateStudent(action) {
	yield axios
		.put('http://localhost:8080/v1/student/' + action.payload.id, action.payload.student)
	yield getDataStudent()
}
function* findStudent(action) {
	let data;
	yield axios
		.get(`http://localhost:8080/v1/student/find_st?key=${action.payload.id}`)
		.then(function (res) {
			data = res.data;
		})
		.catch(function (err) {
			console.log(err);
		});
	yield put({ type: actionStudent.type.FIND_STUDENT_SUCCESS, payload: data })
}


function* getDataClass() {
	let data;
	yield axios
		.get('http://localhost:8080/v1/class/list/')
		.then(function (res) {
			data = res.data
		})
		.catch(function (err) {
			console.log(err);
		})
	yield put({ type: actionClass.type.GET_DATA_CLASS_SUCCESS, payload: data })
}
function* addNewClass(action) {
	console.log("CALL API ADD NEW CLASS");
	yield axios
		.post('http://localhost:8080/v1/class/', action.payload.classObj)
	yield getDataClass()
}
function* deleteClass(action) {
	yield axios
		.delete(`http://localhost:8080/v1/class/${action.payload.idClass}`)
	yield getDataClass()
}
function* updateDataClass(action) {
	yield axios
		.put('http://localhost:8080/v1/class/' + action.payload.idClass, action.payload.classObj)
	yield getDataClass()
}

function* getDataTeacher() {
	let data;
	yield axios
		.get('http://localhost:8080/v1/teacher/list/')
		.then(function (res) {
			data = res.data
		})
		.catch(function (err) {
			console.log(err);
		})
	yield put({ type: actionTeacher.type.GET_DATA_TEACHER_SUCCESS, payload: data })
}
function* addNewTeacher(action) {
	yield axios
		.post('http://localhost:8080/v1/teacher/', action.payload.teacher)
	yield getDataTeacher()
}
function* deleteTeacher(action) {

}
function* updateTeacher(action) {

}
function* findTeacher(action) {

}

function* handleStudent() {
	yield takeEvery(actionStudent.type.GET_DATA_STUDENT, getDataStudent)
	yield takeEvery(actionStudent.type.ADD_NEW_STUDENT, addNewStudent)
	yield takeEvery(actionStudent.type.DELETE_STUDENT, deleteStudent)
	yield takeEvery(actionStudent.type.UPDATE_STUDENT, updateStudent)
	yield takeEvery(actionStudent.type.FIND_STUDENT, findStudent)
}
function* handleCLass() {
	yield takeEvery(actionClass.type.GET_DATA_CLASS, getDataClass)
	yield takeEvery(actionClass.type.ADD_NEW_CLASS, addNewClass)
	yield takeEvery(actionClass.type.DELETE_CLASS, deleteClass)
	yield takeEvery(actionClass.type.UPDATE_CLASS, updateDataClass)
}
function* handleTeacher() {
	yield takeEvery(actionTeacher.type.GET_DATA_TEACHER, getDataTeacher)
	yield takeEvery(actionTeacher.type.ADD_NEW_TEACHER, addNewTeacher)
	yield takeEvery(actionTeacher.type.DELETE_TEACHER, deleteTeacher)
	yield takeEvery(actionTeacher.type.UPDATE_TEACHER, updateTeacher)
	yield takeEvery(actionTeacher.type.FIND_TEACHER, findTeacher)

}

// notice how we now only export the rootSaga
// single entry point to start all Sagas at once
export default function* rootSaga() {
	yield all([
		handleStudent(),
		handleCLass(),
		handleTeacher(),
	]);
}