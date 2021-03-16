import React from 'react';
import s from './Experience.module.scss'
import {v1} from 'uuid';


const experience = [
	{
		id: v1(),
		company: 'https://htmlacademy.ru/',
		title: 'HTML и CSS. Профессиональная вёрстка сайтов',
		years: 'март 2019 - май 2019',
		description: 'HTML Academy'
	},
	{
		id: v1(),
		company: 'https://htmlacademy.ru/',
		title: 'HTML и CSS. Адаптивная вёрстка и автоматизация',
		years: 'май 2019 - август 2019',
		description: 'HTML Academy'
	},
	{
		id: v1(),
		company: 'https://htmlacademy.ru/',
		title: 'JavaScript. Профессиональная разработка веб-интерфейсов',
		years: 'август 2019 - октябрь 2019',
		description: 'HTML Academy'
	},
	{
		id: v1(),
		company: 'https://rollingscopes.com/',
		title: 'RS 2020 Q1 (JavaScript)',
		years: 'февраль 2020 - июль 2020',
		description: 'The Rolling Scopes School'
	},
	{
		id: v1(),
		company: 'https://andersenlab.com/',
		title: 'Общий JavaScript',
		years: 'август 2020 - сентябрь 2020',
		description: 'Andersen'
	},
	{
		id: v1(),
		company: 'https://it-incubator.by/React-online.html',
		title: 'React + Redux + Typescript',
		years: 'сентябрь 2020 - февраль 2021',
		description: 'IT-incubator'
	},
]

export const Experience = () => {

	const experienceList = experience.map(exp => {
		return <li key={exp.id} className={s.expItem}>
			<a className={s.expLink} href={exp.company} target="_blank">{exp.description}</a>
			<p className={s.expYear}>{exp.years}</p>
			<p  className={s.expHeading}>{exp.title}</p>
		</li>

	})
	return (
		<div className={`${s.expBox} ${s.animation}`}>
			<div className={s.expBoxTitle}>
				<h3 className={s.expTitle}>Experience</h3>
			</div>
			<ul className={s.expList}>
				{experienceList}
			</ul>
		</div>
	)
}