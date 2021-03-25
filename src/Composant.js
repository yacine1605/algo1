/*import data from './data.json';
import { useState } from 'react';
const State = () => {
	const [conter, setConter] = useState(0);
	const next = () => {
		console.log(conter);
		setConter(conter + 1);
		let i = data.length;
		if (conter === i - 1) {
			setConter(conter);
		}
	};
	const precedent = () => {
		console.log(conter);
		setConter(conter - 1);
		if (conter === 0) {
			setConter(conter);
		}
	};

	const n = ' new';
	const f = 'featured';
	return (
		<div className=" container" key={data[conter].id}>
			<div className="ima">
				<span>
					<img src={process.env.PUBLIC_URL + data[conter].logo} alt="photpsnap" />
				</span>
				<span>{data[conter].company}</span>
				<span style={{ backgroundColor: 'green', marginLeftColor: 'green' }}>{data[conter].new && n} </span>
				<span style={{ backgroundColor: 'gray' }}>{data[conter].featured && f}</span>
			</div>
			<div className="secondline">
				<span>{data.position}</span> <span> {data.role}</span> <span> {data[conter].level}</span>
				{data[conter].languages.map((elem) => (
					<span>{elem}</span>
				))}
				{data[conter].tools.map((element) => (
					<span> {element}</span>
				))}
			</div>
			<div className="thirdline">
				<span>{data[conter].postedAt}</span> <span>{data.values.contract}</span>{' '}
				<span>{data[conter].location}</span>
			</div>
			<div className="button page">
				<button onClick={() => precedent()}> precedent </button>
				<button onClick={() => next()}> next </button>
			</div>
		</div>
	);
};

export default State;*/
