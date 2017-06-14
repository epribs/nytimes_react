import React from 'react';
import ReactDom from 'React-Dom';
import routes from './config/routes';

class Main extends React.Component {
	render() {
		return (
			<div className='container'>
				<div className='jumbotron'>
					<h1><span className="glyphicon glyphicon-list-alt"></span> New York Times Search</h1>
				</div>

				<Query />

				<Results />

				<Saved />
			</div>
		)
	}
}