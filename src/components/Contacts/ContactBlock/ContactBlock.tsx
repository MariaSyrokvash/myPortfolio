import React from 'react';
import s from './ContactBlock.module.scss';
import {ContactFormBlock} from './ContactFormBlock/ContactFormBlock';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faPhoneAlt} from '@fortawesome/free-solid-svg-icons';
import {faMapMarkedAlt} from '@fortawesome/free-solid-svg-icons';
import { faTelegramPlane } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const contact = [
	{title: 'phone', text: '+375 29 859 58 38', icon: faPhoneAlt},
	{title: 'telegram', text: '@MariyaSyrokvash', icon: faTelegramPlane},
	{title: 'github', text: 'Go to github', icon: faGithub},
	{title: 'address', text: 'Minsk, Belarus', icon: faMapMarkedAlt},
]

export const ContactBlock = () => {

	const contactInfo = contact.map((el, index) => {
		return <li key={index} className={s.contactItem}>
			<h3 className={s.contactTitle}>{el.title}</h3>
			<span className={s.contactIcon}><FontAwesomeIcon icon={el.icon}/></span>
			{el.text === 'Go to github' ?
				<a className={s.contactText} target='_blank' href='https://github.com/MariaSyrokvash'>{el.text}</a> :
				<span className={s.contactText}>{el.text}</span>
			}
		</li>
	})
	return (
		<div className={s.contactBox}>
			<ul className={s.contactList}>{contactInfo}</ul>
			<ContactFormBlock/>
		</div>
	)
}