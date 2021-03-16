import React, {CSSProperties, FC} from 'react';
import s from './Projects.module.scss';
import social from './projectCover/social.jpg'
import {v1} from 'uuid';

type ProjectType = {
	title?: string
	content?: string
	style?: CSSProperties | undefined
}
const project = [
	{id: v1(), heading: 'Todolist', demo: 'https://ru.wikipedia.org', github: 'https://ru.wikipedia.org', image: social},
	{id: v1(), heading: 'Social NetWork', demo: 'https://ru.wikipedia.org', github: 'https://ru.wikipedia.org', image: social}
]


export const Projects: FC<ProjectType> = ({title, content, style}) => {


	const projects = project.map(project => {
		return <div className={s.tiles} key={project.id}>
				<a className={s.tile} href="#">
					<img src={project.image}/>
					<div className={s.details}>
						<span className={s.title}>{project.heading}</span>
						<span className={s.info}><a href={project.demo} target="_blank">Demo</a></span>
						<span className={s.info}><a href={project.github} target="_blank">Github</a></span>
					</div>
				</a>
		</div>
	})


	return (
		<div className={s.projectBox}>
			{projects}
		</div>
	)
}