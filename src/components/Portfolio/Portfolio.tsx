import React from 'react';
import s from './Portfolio.module.scss'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assets/image/close-button.png';
import {Title} from '../common/Title/Title';
import {faSuitcase} from '@fortawesome/free-solid-svg-icons';
import {Project} from './Project/Project';
import socialUrl from './../../assets/image/social.jpg'

export const Portfolio = () => {
	const socialStyle = {
		backgroundImage: `url(${socialUrl})`,
	};

	return (
		<div className={`${s.portfolio} ${s.animation}`}>
			<div className={s.portfolioWrapper}>
				<div className={`${s.portfolioInner} ${app.container}`}>
					<Title title='my' accentTitle='portfolio' icon={faSuitcase}/>

					<div className={s.portfolioProjects}>
						<Project style={socialStyle} title={'TodoList'} content={'TSExternalModuleReference'} />
						<Project title={'TodoList'} content={'TSExternalModuleReference'} />
						<Project title={'TodoList'} content={'TSExternalModuleReference'} />
					</div>

				</div>
			</div>
			<NavLink to={'/'} exact className={app.linkBack}>
				<img className={app.aboutBtnClose} src={close}/>
			</NavLink>
		</div>
	);
}

