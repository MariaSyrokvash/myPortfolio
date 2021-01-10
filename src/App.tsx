import React from 'react';
import s from './App.module.css';
import {Avatar} from './components/Avatar/Avatar';
import {Routes} from './components/Routes/Routes';
import {Main} from './components/Main/Main';
import {HashRouter} from 'react-router-dom';

const App = () => {
	return (
		<HashRouter>
			<div className={s.wrapper}>
				<div className={s.leftBox}>
					<Avatar/>
				</div>
				<div className={s.rightBox}>

					<Main/>
					<Routes/>

				</div>
			</div>
		</HashRouter>

	);
}

export default App;
