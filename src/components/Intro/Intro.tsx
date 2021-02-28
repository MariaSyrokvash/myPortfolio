import React from 'react';
import s from './Intro.module.scss'

export const Intro = () => {

	return (

		<a className={`${s.box} ${s.borderBtmRight}`}>
			<span className={s.textIntro}>Hi There ! I'm</span>
			<span className={s.textIntroName}>Mariya Syrokvash</span>
			<span className={`${s.textIntro} ${s.textIntroAccent}`}>

				Junior Front End Developer
			</span>
		</a>
	);
}

