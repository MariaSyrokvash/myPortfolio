import React from 'react';
import s from './Portfolio.module.scss'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assets/image/close-button.png';
import {Title} from '../common/Title/Title';
import { faSuitcase } from '@fortawesome/free-solid-svg-icons';

export const Portfolio = () => {
	return (
		<div className={`${s.portfolio} ${s.animation}`}>
			<div className={s.portfolioInner}>
				<Title title='my' accentTitle='portfolio' icon={faSuitcase}/>

				<div className={s.example}>1</div>
				<div className={s.example2}>2</div>

			</div>

			<NavLink to={'/'} exact className={app.linkBack}>
				<img className={app.aboutBtnClose} src={close}/>
			</NavLink>
		</div>
	);
}

