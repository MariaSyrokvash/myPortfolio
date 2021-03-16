import React from 'react';
import s from './Skills.module.scss'
import {v1} from 'uuid';
import {faReact, faJs, faGithub, faCss3, faHtml5} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {IconProp} from '@fortawesome/fontawesome-svg-core';

type SkillsType = {
	id: string
	skill: string
	icon: IconProp
}

const skills: Array<SkillsType> = [
	{id: v1(), skill: 'React', icon: faReact},
	{id: v1(), skill: 'Redux', icon: faReact},
	{id: v1(), skill: 'TypeScript', icon: faReact},
	{id: v1(), skill: 'JavaScript', icon: faJs},
	{id: v1(), skill: 'REST API', icon: faReact},
	{id: v1(), skill: 'HTML5', icon: faHtml5},
	{id: v1(), skill: 'CSS & preprocessing', icon: faCss3},
	{id: v1(), skill: 'TDD - Jest', icon: faReact},
	{id: v1(), skill: 'Storybook', icon: faReact},
	{id: v1(), skill: 'Github', icon: faGithub},
]

export const Skills = () => {

	const skillsList = skills.map(skill => {
		return <li key={skill.id} className={s.skillItem}>
				<span className={s.aboutIcon}><FontAwesomeIcon icon={skill.icon}/></span>
				<p className={s.skillTitle}>{skill.skill}</p>
			</li>
	})

	return (
		<div className={`${s.skillBox} ${s.animation}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
			<ul className={s.skillList}>
				{skillsList}
			</ul>

		</div>
	)
}