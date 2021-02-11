import s from './PersonalInfo.module.scss';
import React from 'react';
import {faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

const personalInfo = [
	{title: 'First Name: ', content: 'Mariya'},
	{title: 'Last Name: ', content: 'Syrakvash'},
	{title: 'Date of birth: ', content: '11 May 1994'},
	{title: 'English: ', content: 'B1'},
	{title: 'Address: ', content: 'Minsk, Belarus'},
	{title: 'Email: ', content: 'mariya.syrokvash@gmail.com'},
	{title: 'Phone: ', content: '+375 29 859 58 38'},
	{title: 'Telegram: ', content: '@MariyaSyrokvash'},
]

export const PersonalInfo = () => {

	const info = personalInfo.map((el, index) => {
		return <li className={s.personalInfoItem} key={index}>
			<span>{el.title}</span>
			<span>{el.content}</span>
		</li>
	})
	return (
		<div className={s.personalBox}>
			<div className={s.personalInfo}>
				<div className={s.personalInfoTitle}>
					<span className={s.personalIcon}><FontAwesomeIcon icon={faUser}/></span>
					<h4 className={s.personalInfoHeading}>Personal Info</h4>
				</div>
				<p className={s.personalDesc}>I'm a Freelance Web Designer &amp; Developer based in Moscow, Russia.
					I have serious passion for UI effects, animations and creating intuitive,
					with over a decade of experience.
				</p>
				<div className={s.personalInfoInner}>
					<ul className={s.personalInfoList}>
						{info}
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a href="" className={s.resumeLink}>Download Resume</a>
			</div>
		</div>
	)
}