import './App.css';
import ClassComponent from './components/ClassComponent';
import StudentComponent from './components/StudentComponent';
import TeacherComponent from './components/TeacherComponent';



function App() {
	return (
		<div className="App">
			<StudentComponent></StudentComponent>
			<ClassComponent></ClassComponent>
			<TeacherComponent></TeacherComponent>
		</div>
	);
}
export default App;