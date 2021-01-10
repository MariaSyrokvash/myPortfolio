import React from 'react';
import s from './Contacts.module.css'
import {NavLink} from 'react-router-dom';

export const Contacts = () => {
	return (
		<div className={`${s.contacts} ${s.animation}`}>
			Contacts

			<NavLink to={'/'} exact>назад</NavLink>
		</div>
	);
}

