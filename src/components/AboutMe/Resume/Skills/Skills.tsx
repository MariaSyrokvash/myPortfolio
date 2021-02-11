import React from 'react';
import s from './Skills.module.scss'

export const Skills = () => {
	return (
		<div className={`${s.skillBox} ${s.animation}`}>
			<div className={s.skillHeadingBox}>
				<h3 className={s.skillHeading}>Skills</h3>
			</div>
		</div>
	)
}