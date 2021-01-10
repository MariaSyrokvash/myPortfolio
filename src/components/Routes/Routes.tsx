import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {AboutMe} from '../AboutMe/AboutMe';
import {Portfolio} from '../Portfolio/Portfolio';
import {Contacts} from '../Contacts/Contacts';

export const PATH = {
	ABOUT: '/about',
	PORTFOLIO: '/portfolio',
	CONTACTS: '/contacts',
}

export const Routes = () => {
	return (
		<div>
			<HashRouter>
				<Switch>


					<Route path={PATH.ABOUT} exact render={() => <AboutMe/>}/>
					<Route path={PATH.PORTFOLIO} exact render={() => <Portfolio/>}/>
					<Route path={PATH.CONTACTS} exact render={() => <Contacts/>}/>


				</Switch>
			</HashRouter>
		</div>
	);
}

