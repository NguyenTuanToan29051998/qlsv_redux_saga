
const type = {
	ADD_NEW_STUDENT: 'ADD_NEW_STUDENT',
	UPDATE_STUDENT: 'UPDATE_STUDENT',
	DELETE_STUDENT: 'DELETE_STUDENT',
	GET_DATA_STUDENT: 'GET_DATA_STUDENT',
	GET_DATA_STUDENT_SUCCESS: 'GET_DATA_STUDENT_SUCCESS',
	FIND_STUDENT: 'FIND_STUDENT',
	FIND_STUDENT_SUCCESS: 'FIND_STUDENT_SUCCESS',

}

const action = {
	getDataStudent() {
		return {
			type: type.GET_DATA_STUDENT
		}
	},
	addNewStudent(student) {
		return {
			type: type.ADD_NEW_STUDENT,
			payload: {
				student: student,
			}
		}
	},
	updateStudent(sId, student) {
		return {
			type: type.UPDATE_STUDENT,
			payload: {
				id: sId,
				student: student,
			}
		}
	},
	deleteStudent(sId) {
		return {
			type: type.DELETE_STUDENT,
			payload: {
				id: sId,
			}
		}
	},
	findStudent(sId) {
		return {
			type: type.FIND_STUDENT,
			payload: {
				id: sId,
			}
		}
	},


}
const exportedObject = {
	type,
	action
}
export default exportedObject;