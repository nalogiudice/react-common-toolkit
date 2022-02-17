import * as React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme, CssBaseline, GlobalStyles } from '@mui/material';

import { Main } from './views/Main';

const darkTheme = createTheme({
	palette: {
	  mode: 'dark',
	},
  });

  const globalStyles = {
	  body: {
		  background: '#222',
		  height: '100vh',
	  }
  };


const App = () => {
	return (
		<ThemeProvider theme={darkTheme} >
			<CssBaseline />
			<Main />
			<GlobalStyles />
		</ThemeProvider>
	);
}
ReactDOM.render(<App />, document.getElementById('main'));