import React from 'react';

class Main extends React.Component {
	render() {
		return (

			<div className='container'>
				<div className='jumbotron'>
					<h1><span className="glyphicon glyphicon-list-alt"></span> New York Times Search</h1>
				</div>

				{this.props.children}
			</div>
		);
	}
};

export default Main;