import React from 'react';
import { Container, List, ListItem, Divider, Link, Card, ListItemText} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
//import useBackend, { RequestMethod, EndPoint } from '../../hooks/useBackend';
import { HasUserProps } from '../../types';
//import Loader from '../../components/loader/Loader';
import useTranslator from '../../hooks/useTranslator';
import { Translation } from '../../translations';
import { UserContext } from '../../contexts/UserContext';
import Person from '../../components/person/Person';

const useStyles = makeStyles((theme) => ({
	container: {
		flexGrow: 1,
		textAlign: 'center',
        marginBottom: '16px',
    },
    listitem: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
		textDecoration: 'none',
		color: 'initial',
    },
    link: {
		textDecoration: 'none',
        color: 'inherit',
    },
    title: {
        color: '#2c4d7f'
    },
    menteeCard: {
		padding: '20px',
		marginBottom: '12px',
		marginTop: '20px',
    },
    personName: {
        fontSize: '20px',
    },
    listImage: {
		borderRadius: '50%',
    },
    listitem2: {
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
		textDecoration: 'none',
		color: 'initial',
    },
    acceptButton: {
		margin: '4px',
		backgroundColor: '#26c72b',
		color: '#fff',
	},
	declineButton: {
		margin: '4px',
		backgroundColor: '#B40404',
		color: '#fff',
    },
    cardTitle: {
    },
    suuredArvud: {
		color: 'purple',
		fontSize: '20px',
		marginRight: '15px',
	},
}));

export default function AdminView({ user }: HasUserProps) {

    const classes = useStyles();
    const userContext = React.useContext(UserContext);
    const [added, isAdded] = React.useState(false);
    const t = useTranslator();

    /*const [queryUnverifiedActivities, { data, loading, called }] = useBackend({
		requestMethod: RequestMethod.GET,
		endPoint: EndPoint.UNVERIFIED_ACTIVITIES,
		authToken: user.token,
    });

    const [queryAllUsers, { data:usersData, loading:usersLoading, called:usersCalled }] = useBackend({
		requestMethod: RequestMethod.GET,
		endPoint: EndPoint.ALL_USERS,
		authToken: user.token,
    });

    React.useEffect(() => {
		if (called) {
			return;
		}
		queryUnverifiedActivities();
    }, [called, queryUnverifiedActivities]);

    React.useEffect(() => {
		if (usersCalled) {
			return;
		}
		queryAllUsers();
    }, [usersCalled, queryAllUsers]);
    
    if (loading || !usersData || usersLoading || !data) {
		return <Loader />;
    }
    */
    
    const dummydata = [
        {
            name: "Tegevus 1",
            group: "Grupp2",
            id: "1"
        },
        {
            name: "Tegevus 2",
            group: "Grupp 9",
            id: "2"
        },
        {
            name: "Rebaste ristimine",
            group: "Parim grupp",
            id: "89"
        },
        {
            name: "Bowling",
            group: "Kaaa",
            id: "78"
        }
    ]
    const dummydata2 = [
        {
            name: "Poiss ree",
            imageurl: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
            tagline: "Hea kasutaja",
            userId: "79",
        },
        {
            name: "Master Yoda",
            imageurl: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
            tagline: "Hea kasutaja",
            userId: "76",
        },
        {
            name: "Tere hommikust",
            imageurl: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
            tagline: "Hea kasutaja",
            userId: "73",
        },
        {
            name: "Tere õhtust",
            imageurl: "https://www.petmd.com/sites/default/files/what-does-it-mean-when-cat-wags-tail.jpg",
            tagline: "Hea kasutaja",
            userId: "72",
        }
    ];
    const activitytotal = dummydata.length;
    const usertotal = dummydata2.length;


    return (
        <Container className={classes.container} maxWidth="sm">
            <h1 className={classes.title}>{t(Translation.ADMIN_OVERVIEW)}</h1>
            <Card className={classes.menteeCard}>
                <h2 className={classes.cardTitle}>{t(Translation.GRADE_ACTIVITIES)}</h2>
                <h3>
                    Hindamata tegevusi: <span className={classes.suuredArvud}>{activitytotal}</span>
                </h3>
            <List>
                {dummydata.map(({name, group, id}) => {
                    return <div>
                        <ListItem className={classes.listitem}>
                            <div>
                                <Link
                                href={id ? `/activities/activity/${id}` : '#'}
                                className={classes.link}
                                >
                                    <ListItemText className={classes.personName} primary={name} secondary={group}/>
                                </Link>
                            </div>
                        </ListItem>
                        <Divider variant="middle"/>
                    </div>
                })}
            </List>
            </Card>
            <div>
            <Card className={classes.menteeCard}>
                <h2 className={classes.cardTitle}>{t(Translation.VERIFY_USERS)}</h2>
                <h3>
                    Kinnitamata kasutajaid: <span className={classes.suuredArvud}>{usertotal}</span>
                </h3>
                <List>
                {dummydata2.map(({name, tagline, userId, imageurl}) => {
                    return <div>
                        <Person name={name} tagline={tagline} imageUrl={imageurl} userId={userId}></Person>
                    </div>
                })}
                </List>
            </Card>
            </div>
        </Container>
	);
}