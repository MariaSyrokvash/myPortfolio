import React from 'react';
import s from './AboutMe.module.css'
import {NavLink} from 'react-router-dom';

export const AboutMe = () => {
	return (
		<div className={`${s.aboutBox} ${s.animation}`}>
			AboutMe

			<NavLink to={'/'} exact>назад</NavLink>
		</div>
	);
}

