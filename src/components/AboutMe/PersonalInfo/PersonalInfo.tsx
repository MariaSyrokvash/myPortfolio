import s from './PersonalInfo.module.scss';
import React from 'react';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

export const PersonalInfo = () => {
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
						<li className={s.personalInfoItem}>
							<span >First Name: </span>
							<span>Mariya </span>
						</li>
						<li className={s.personalInfoItem}>
							<span>Last Name: </span>
							<span>Syrokvash </span>
						</li>
						<li className={s.personalInfoItem}>
							<span>Date of birth: </span>
							<span>11 May 1994 </span>
						</li>
						<li className={s.personalInfoItem}>
							<span>English: </span>
							<span>B1</span>
						</li>
					</ul>
					<ul className={s.personalInfoList}>
						<li className={s.personalInfoItem}>
							<span>Address:  </span>
							<span>Minsk, Belarus </span>
						</li>
						<li className={s.personalInfoItem}>
							<span>Phone: </span>
							<span>+375 29 859 58 38 </span>
						</li>
						<li className={s.personalInfoItem}>
							<span>Email: </span>
							<span>mariya.syrokvash@gmail.com</span>
						</li>
						<li className={s.personalInfoItem}>
							<span>Telegram:</span>
							<span>@MariyaSyrokvash</span>
						</li>
					</ul>
				</div>
			</div>
			<div className={s.resume}>
				<a href="" className={s.resumeLink}>Download Resume </a>
			</div>
		</div>
	)
}