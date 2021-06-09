import actions from "../actions/class_action";

const data = { value: 0, listClass: [] }
const crudReducerClass = (state = data, action) => {
    switch (action.type) {
        case actions.type.GET_DATA_CLASS_SUCCESS: {
            let newState = { ...state };
            newState.listClass = action.payload;
            return newState;
        }

        default:
            return {
                ...state,
            }
    }
}

export default crudReducerClass;
