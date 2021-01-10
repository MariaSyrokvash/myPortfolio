import React from 'react';
import s from './Portfolio.module.css'
import {NavLink} from 'react-router-dom';

export const Portfolio = () => {
	return (
		<div className={`${s.portfolio} ${s.animation}`}>
			Portfolio
			<NavLink to={'/'} exact>назад</NavLink>
		</div>
	);
}

