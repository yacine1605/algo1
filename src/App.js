import { useState } from 'react';
import List from './List';
import './App.css';
import { v4 as uuid4 } from 'uuid';
function App() {
	const [array, setArray] = useState([]);
	const [input, setInput] = useState('');
	const [theme, setTheme] = useState('white');
	const deleteIthem = (id) => {
		const newState = array.filter((elem) => elem.id !== id);
		setArray(newState);
	};

	return (
		<div className={theme}>
			<div className="header">
				<button onClick={() => setTheme(theme === 'white' ? 'black' : 'white')}> change theme </button>
				<div className="container">
					<form
						onSubmit={(e) => {
							e.preventDefault();
							if (input) {
								setArray([...array, { id: uuid4(), task: input }]);
								setInput('');
							}
						}}
					>
						<div className="input">
							<input
								onChange={(e) => {
									setInput(e.target.value);
								}}
								value={input}
							/>
						</div>
						<button>Add</button>
					</form>
					<List data={array} delete={deleteIthem} />
				</div>
			</div>
		</div>
	);
}
export default App;
