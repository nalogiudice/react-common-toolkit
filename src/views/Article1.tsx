import * as React from 'react';
import { Grid, Container, Typography } from '@mui/material/';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

const starWarsSection = () => {
	const starWarsUrl: string = "https://swapi.dev/api/films/1/";
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

		const fetchQuery = () => {
			return fetch(starWarsUrl, {
				method: "POST",
				headers: { "content-type": "application/json" },
				body: JSON.stringify({ starWarsQuery })
			})
				.then((res) => {console.log(res)})
		};

		const starWarsData = async () => {
			const incomingData = await fetchQuery();
			console.log('incomingData: ', incomingData);
		}

		starWarsData();
}

const SpaceXSection = () => {
	const spaceXUrl: string = "https://api.spacex.land/graphql/";
	const query = `
		query {
		launchesPast(limit: 10) {
			mission_name
			launch_date_local
			launch_site {
			site_name_long
			}
		}
		}
		`;

	const fetchQuery = () => {
		return fetch(spaceXUrl, {
			method: "POST",
			headers: { "content-type": "application/json" },
			body: JSON.stringify({ query })
		})
			.then((res) => res.json())
			.then((result) => {
				return result;
			});
	};

	const missionData = async () => {
		const incomingData = await fetchQuery();

		incomingData.data.launchesPast.map((element: any) => {
			for (let x in element) {
				console.log(x, element[x])
			}
		})
	}

	missionData();
}

const Article1 = () => {
	const codeSection1 = () => {
		const codeString = 
		`const fetchQuery = () => {
	return fetch(spaceXUrl, {
		method: "POST",
		headers: { "content-type": "application/json" },
		body: JSON.stringify({ query })
	})
		.then((res) => res.json())
		.then((result) => {
			return result;
		});
};`;
		return (
			<SyntaxHighlighter language="javascript" style={atomDark}>
				{codeString}
			</SyntaxHighlighter>
		);
	};

	
	SpaceXSection();
	starWarsSection();

	return (
		<Container component='article' maxWidth='md'>
			<Grid container direction={'column'} spacing={4}>
				<Grid item>
						<Typography variant='h4'>Fetching and Displaying Complex Objects</Typography>
						<p>Keywords: graphql, objects, query</p>
					</Grid>
					<Grid item>
						<Typography variant='subtitle1'>Often times, incoming data must be massaged. Lets explore several common use cases...</Typography>
					</Grid>
					<Grid item>
						<Typography variant='body2'>Problem: You have to pull some data from a graphql endpoint and display it.</Typography>
					</Grid>
					<Grid item>
						{codeSection1()}
					</Grid>
			</Grid>
		</Container>
	)
}

export default Article1;