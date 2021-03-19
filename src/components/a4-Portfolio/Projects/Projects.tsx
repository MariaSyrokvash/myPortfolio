import React, {CSSProperties, FC} from 'react';
import s from './Projects.module.scss';
import social from './projectCover/social.jpg'
import {v1} from 'uuid';
import {faGithub} from '@fortawesome/free-brands-svg-icons';
import {faEye} from '@fortawesome/free-regular-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

type ProjectType = {
	title?: string
	content?: string
	style?: CSSProperties | undefined
}
const project = [
	{id: v1(), heading: 'Todolist', demo: 'https://mariasyrokvash.github.io/todoList/', github: 'https://github.com/MariaSyrokvash/todoList', image: social},
	{id: v1(), heading: 'Social NetWork', demo: 'https://mariasyrokvash.github.io/social_network/#/', github: 'https://github.com/MariaSyrokvash/social_network', image: social},
	{id: v1(), heading: 'Quiz', demo: 'https://mariasyrokvash.github.io/quiz/', github: 'https://github.com/MariaSyrokvash/fridayTask', image: social},
	{id: v1(), heading: 'Anki', demo: 'https://mariasyrokvash.github.io/fridayTask/', github: 'https://github.com/MariaSyrokvash/quiz', image: social}
]


export const Projects: FC<ProjectType> = ({title, content, style}) => {


	const projects = project.map(project => {
		return <div className={s.tiles} key={project.id}>
				<div className={s.tile} >
					<img src={project.image} className={s.projectImage}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}>
							<FontAwesomeIcon icon={faEye} className={s.icon} />
							<a href={project.demo} className={s.link} target="_blank">Demo</a>
						</span>
						<span className={s.info}>
							<FontAwesomeIcon icon={faGithub} className={s.icon}/>
							<a href={project.github} className={s.link} target="_blank">Github</a></span>
					</div>
				</div>
		</div>
	})


	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}
