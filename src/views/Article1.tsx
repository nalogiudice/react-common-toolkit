import * as React from 'react';
import { Box, Chip, Link, Grid, Container, Typography } from '@mui/material/';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const starWarsSection = () => {
	const starWarsBaseUrl: string = 'https://swapi.dev/api/';
	const filmsUrl: string = 'films/';

	// test query
	const starWarsQuery = `
		query Query {
			allFilms {
			  films {
				title
				director
				releaseDate
				speciesConnection {
				  species {
					name
					classification
					homeworld {
					  name
					}
				  }
				}
			  }
			}
		  }
		`

	/**
	 * Using fetch()
	 * Fetch only needs an url then must be
	 * converted to json
	 */
	function request(): Promise<any> {
		return fetch(starWarsBaseUrl.concat(filmsUrl))
			.then((res) => {
				return res.json();
			})
			.then(data => {
				return data;
			})
			.catch(function (err) {
				console.log(err);
			});
	}

	/**
	 * Asynchronously do something
	 */
	const starWarsData = async () => {
		// const incomingData = await fetchQuery();
		const incomingData = await request();
		console.log('incomingData: ', incomingData);
	}

	starWarsData();
}

const Article1 = () => {
	// Run the data tests
	starWarsSection();

	// Simpliest fetch example
	const codeSection1 = () => {
		const codeString =
			`function request(): Promise<any> {
	return fetch("https://swapi.dev/api/")
		.then((res) => {
			return res.json();
		})
		.catch(function (err) {
			console.log(err);
		});
	}`;
		return (
			<SyntaxHighlighter language="javascript" style={atomDark}>
				{codeString}
			</SyntaxHighlighter>
		);
	};

	return (
		<Container component='article' maxWidth='lg'>
			<Box sx={{ p: 4, border: '6px solid #1D1F21' }}>
			<Grid container direction={'column'} spacing={4}>
				<Grid item>
					<Typography variant='h4'>Fetching and Displaying Complex Objects</Typography>
					<Typography variant='subtitle1'>Keywords: <Chip size="small" label="graphql" color="primary" /> <Chip size="small" label="objects" color="secondary" /> <Chip label="query" color="info" size="small" /></Typography>
				</Grid>
				<Grid item>
					<Typography variant='body1'>Often times, incoming data must be massaged. Lets explore several common use cases...</Typography>
				</Grid>
				<Grid item>
					<Typography variant='body2'>Problem: You have to pull some data from a graphql endpoint and display it.</Typography>
					<Typography variant='body2'>Below is a very simple `fetch()` call to a <Link target="_blank" href="https://swapi.dev/api/">Star Wars API</Link>.</Typography>
				</Grid>
				<Grid item>
					{codeSection1()}
				</Grid>
			</Grid>
			</Box>
		</Container>
	)
}

export default Article1;