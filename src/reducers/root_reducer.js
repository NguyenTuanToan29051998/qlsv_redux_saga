import { combineReducers } from 'redux'
import studentReducer from './student_reducer'
import classReducer from './class_reducer'
import teacherReducer from './teacher_reducer'
const rootReducer = combineReducers({
	st: studentReducer,
	cl: classReducer,
	tc: teacherReducer
});

export default rootReducer;
