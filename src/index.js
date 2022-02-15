import * as React from 'react';
import ReactDOM from 'react-dom';

import { Main } from './views/Main';

const App = () => {
	const welcomeMessage = (
		<p>This will soon become a function library for common React methods</p>
	);

	const renderWelcomeBanner = () => {
		return (
			<div>
				{welcomeMessage}
				<Main />
			</div>		
		);
	};

 return renderWelcomeBanner();
 }
ReactDOM.render(<App />, document.getElementById('app'));