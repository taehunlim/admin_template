import React from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { SWRConfig } from 'swr';
import { api } from './utils/api';
import { RecoilRoot } from 'recoil';

import "./styles.scss"

import { allRoutes, PrivateRoutes } from './routes/allRoutes';
import Authmiddleware from "./routes/middleware/Authmiddleware";


const App: React.FC = () => {
	const swrConfig = {
		fetcher: (url: string, params: object) => {
			api
				.get(url, { params })
				.then(response => response.data)
		}
	};

	const NonAuthRoutes = ({
		path,
		component: Component,
	}) => (
		<Route
			path={path}
			render={props => {
				return (
	
					<Component {...props} />
	
				);
			}}
		/>
	);

	return (
		<RecoilRoot>
			<SWRConfig value={swrConfig}>
				<BrowserRouter>
					<Switch>
						{allRoutes.map((route, idx) => (
							<NonAuthRoutes
								path={route.path}
								component={route.component}
								key={idx}
							/>
						))}

						{PrivateRoutes.map((route, idx) => (
							<Authmiddleware
								path={route.path}
								component={route.component}
								key={idx}
							/>
						))}
					</Switch>
				</BrowserRouter>
			</SWRConfig>
		</RecoilRoot>
	);
};

export default App;