import React from 'react';
import s from './AboutMe.module.scss'
import close from './../../assets/image/close-button.png'
import app from '../../App.module.scss'
import {PersonalInfo} from './PersonalInfo/PersonalInfo';
import {NavLink} from 'react-router-dom';
import {Resume} from './Resume/Resume';
import {Title} from '../common/Title/Title';
import { faIdCard } from '@fortawesome/free-solid-svg-icons';

export const AboutMe = () => {
	return (
		<div className={`${s.aboutBox} ${s.animation}`}>
			<div className={s.aboutWrapper}>
				<div className={`${s.aboutInner} ${app.container}`}>
					<Title title='about' accentTitle='me' icon={faIdCard}/>
					<PersonalInfo/>
					<Resume/>
				</div>
			</div>
			<NavLink to={'/'} exact className={app.linkBack}><img src={close}/></NavLink>
		</div>
	);
}

