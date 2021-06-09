import actions from "../actions/student_action";

const data = { value: 0, listStudent: [] }
const crudReducerST = (state = data, action) => {
	switch (action.type) {
		case actions.type.GET_DATA_STUDENT_SUCCESS: {
			let newState = { ...state };
			newState.listStudent = action.payload;
			return newState;
		}
		case actions.type.FIND_STUDENT_SUCCESS: {
			let newState = [];
			newState.listStudent = action.payload;
			return newState;
		}
		default:
			return {
				...state,
			}
	}
}

export default crudReducerST;
