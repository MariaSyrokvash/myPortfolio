import React, {CSSProperties, FC} from 'react';
import s from './Project.module.scss'

type ProjectType = {
	title: string
	content: string
	style?: CSSProperties | undefined
}
export const Project: FC<ProjectType> = ({title, content, style}) => {
	return (
		<div className={s.project}>
			<div className={s.image} style={style}>
				<a href="" className={s.viewBtn}>View</a>
			</div>
			<div className={s.projectInfo}>
				<h3 className={s.projectTitle}>{title}</h3>
				<span className={s.projectText}>{content}</span>
			</div>
		</div>
	)
}