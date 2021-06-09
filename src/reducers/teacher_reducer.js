import actions from "../actions/teacher_action";

const data = { value: 0, listTeacher: [] }
const crudReducerTeacher = (state = data, action) => {
    switch (action.type) {
        case actions.type.GET_DATA_TEACHER_SUCCESS: {
            let newState = { ...state };
            newState.listTeacher = action.payload;
            return newState;
        }
        default:
            return {
                ...state,
            }
    }
}

export default crudReducerTeacher;
