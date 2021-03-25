function App() {
    const [array, setArray] = useState([]);
	const [input, setInput] = useState('');
	const [theme, setTheme] = useState('light');
	
	const useDarkmode = () => {
   
    
    const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')

    
}
	

	return (
		<div className="page ">
			<Contaire>
				<Header>
					<div className="header">
						<Title>TO DO LIST</Title>
						<button className="themebtn">change theme</button>
					</div>
				</Header>
				<span> </span>
				<div className="body">
					<Form>
						onSubmit=
						{(e) => {
							e.preventDefault();
							if (input) {
								setArray([...array, { id: indexedDB, task: input }]);
								setInput('');
							}
						}}
						<div className="input">
							<input
								onChange={(e) => {
									setInput(e.target.value);
								}}
								value={input}
							/>
						</div>
						<div className="btn">
							<button>Add</button>
						</div>
					</Form>
					<div className="footer">
						<List data={array} />
					</div>
				</div>
			</Contaire>
			<div className="text">
				<h6 style={{ color: 'white' }}> drag down</h6>
			</div>

			{/* <div className="header" style={{ba"bg-mobile-dark.jpg"}}></div> */}
		</div>
	);
}

export default App;