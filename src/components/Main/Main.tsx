import React from 'react';
import {Intro} from '../Intro/Intro';
import {NavLink} from 'react-router-dom';
import s from './Main.module.scss';

export const Main = () => {
	return (
		<>
			<Intro/>
			<NavLink className={`${s.linkBox} ${s.borderBtmLeft}`} to={'/about'}><span className={s.white}>About</span><span
				className={s.yellow}>Me</span></NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopRight}`} to={'/portfolio'}><span className={s.white}>My</span><span
				className={s.accent}>Portfolio</span></NavLink>
			<NavLink className={`${s.linkBox} ${s.borderTopLeft}`}  to={'/contacts'}><span className={s.white}>Get</span><span className={s.yellow}>In Touch</span></NavLink>
		</>
	)
}