import React from 'react';
import s from './App.module.scss';
import {Avatar} from './components/Avatar/Avatar';
import {Routes} from './components/Routes/Routes';
import {Main} from './components/Main/Main';

const App = () => {
	return (
			<div className={s.wrapper}>
				<div className={s.leftBox}>
					<Avatar/>
				</div>
				<div className={s.rightBox}>

					<Main/>
					<Routes/>

				</div>
			</div>

	);
}

export default App;
