import React from 'react';
import s from './ContactBlock.module.scss';
import {ContactFormBlock} from './ContactFormBlock/ContactFormBlock';


const contact = [
	{title: 'phone', text: '+375 29 859 58 38', icon: ''},
	{title: 'telegram', text: '@MariyaSyrokvash'},
	{title: 'skype', text: ' you@youwebsite.com'},
	{title: 'address', text: 'Minsk, Belarus'},
]

export const ContactBlock = () => {

	const contactInfo = contact.map((el, index )=> {
		return <li key={index} className={s.contactItem}>
			<h3 className={s.contactTitle}>{el.title}</h3>
			<span className={s.contactIcon}> </span>
			<span className={s.contactText}>{el.text}</span>
		</li>
	})
	return (
		<div  className={s.contactBox}>
			<ul className={s.contactList}>{contactInfo}</ul>
			<ContactFormBlock />
		</div>
	)
}