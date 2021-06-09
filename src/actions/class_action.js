const type = {
    GET_DATA_CLASS: 'GET_DATA_CLASS',
    GET_DATA_CLASS_SUCCESS: 'GET_DATA_CLASS_SUCCCES',
    ADD_NEW_CLASS: 'ADD_NEW_CLASS',
    DELETE_CLASS: 'DELETE_CLASS',
    UPDATE_CLASS: 'UPDATE_CLASS',
}
const action = {
    getDataClass() {
        return {
            type: type.GET_DATA_CLASS
        }
    },
    addNewClass(classObj) {
        return {
            type: type.ADD_NEW_CLASS,
            payload: {
                classObj: classObj
            }
        }
    },
    deleteClass(idClass) {
        return {
            type: type.DELETE_CLASS,
            payload: {
                idClass: idClass
            }
        }
    },
    updateClass(idClass, classObj) {
        return {
            type: type.UPDATE_CLASS,
            payload: {
                idClass: idClass,
                classObj: classObj
            }
        }
    }
}
const exportedObject = {
    type,
    action
}
export default exportedObject;