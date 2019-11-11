import React from 'react';
import { Button, Container, makeStyles, Card, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	logo: {
		display: 'block',
		width: '170px',
		height: '170px',
		margin: 'auto',
	},
	logoContainer: {
		display: 'flex',
		width: '200px',
		height: '200px',
		background: theme.palette.primary.main,
		margin: 'auto',
		borderRadius: '50%',
		boxShadow: '0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12)',
	},
	buttons: {
		flexGrow: 1,
		textAlign: 'center',
	},
	button: {
		marginTop: '1em',
		minWidth: '128px',
		margin: '4px',
	},
	container: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		flexGrow: 1,
		margin: 'auto',
		padding: '30px',
	},
	card: {
		paddingTop: '100px',
		paddingBottom: '100px',
		padding: '30px',
		borderRadius: '10px',
	},
	intro: {
		letterSpacing: '1px',
		textAlign: 'center',
		marginTop: '2em',
		marginBottom: '2em',
		color: '#2a1c6b',
	},
}));

export default function LandingPageView() {
	const classes = useStyles();

	return (
		<div className={classes.container}>
			<Card className={classes.card}>
				<div className={classes.logoContainer}>
					<img className={classes.logo} src="images/logo_valge.webp" alt="MITS LOGO"></img>
				</div>
				<div className={classes.intro}>
					<Typography variant="h4">MentorApp</Typography>
				</div>
				<div className={classes.buttons}>
					<div>
						<Button href="/login" className={classes.button} variant="contained" color="primary">
							LOG IN
						</Button>
					</div>
					<div>
						<Button href="/register" className={classes.button} variant="contained" color="primary">
							REGISTER
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
}
