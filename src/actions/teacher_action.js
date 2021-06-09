const type = {
    GET_DATA_TEACHER: 'GET_DATA_TEACHER',
    GET_DATA_TEACHER_SUCCESS: 'GET_DATA_TEACHER_SUCCESS',
    ADD_NEW_TEACHER: 'ADD_NEW_TEACHER',
    DELETE_TEACHER: 'DELETE_TEACHER',
    UPDATE_TEACHER: 'UPDATE_TEACHER',
    FIND_TEACHER: 'FIND_TEACHER',
    FIND_TEACHER_SUCCESS: 'FIND_TEACHER',
}

const action = {
    getDataTeacher() {
        return {
            type: type.GET_DATA_TEACHER
        }
    },
    addNewTeacher(teacher) {
        return {
            type: type.ADD_NEW_TEACHER,
            payload: {
                teacher: teacher,
            }
        }
    },
    deleteTeacher(idTeacher) {
        return {
            type: type.DELETE_TEACHER,
            payload: {
                idTeacher: idTeacher,
            }
        }
    },
    updateTeacher(idTeacher, teacher) {
        return {
            type: type.UPDATE_TEACHER,
            payload: {
                idTeacher: idTeacher,
                teacher: teacher,
            }
        }
    },
    findTeacher(idTeacher) {
        return {
            type: type.FIND_TEACHER,
            payload: {
                idTeacher: idTeacher,
            }
        }
    },
}
const exportedObject = {
    type,
    action
}
export default exportedObject;