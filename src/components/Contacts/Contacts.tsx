import React from 'react';
import s from './Contacts.module.css'
import {NavLink} from 'react-router-dom';
import app from '../../App.module.scss';
import close from '../../assets/image/close-button.png';
import {Title} from '../common/Title/Title';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';

export const Contacts = () => {
	return (
		<div className={`${s.contacts} ${s.animation}`}>
			<div className={s.contactsInner}>
				<Title title='my' accentTitle='contacts' icon={faPhoneAlt}/>
			</div>

			<NavLink to={'/'} exact className={app.linkBack}>
				<img src={close}/>
			</NavLink>
		</div>
	);
}

