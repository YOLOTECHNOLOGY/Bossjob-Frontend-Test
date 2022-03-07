import React from 'react';
import './App.less';
import {Job} from './components/Job';

function App() {
	return (
		<div className="App">
			<div className="App-Wrapper">
				<Job className='Job-Wrapper' />
			</div>
		</div>
	);
}

export default App;
