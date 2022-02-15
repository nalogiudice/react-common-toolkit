import ReactDOM from 'react-dom';
import React from 'react';

const App = () => {
	const welcomeMessage = (
		<p>This will soon become a function library for common React methods</p>
	);

	const renderWelcomeBanner = () => {
		return (
			<div>
				{welcomeMessage}
			</div>		
		);
	};

 return renderWelcomeBanner();
 }
ReactDOM.render(<App />, document.getElementById('app'));