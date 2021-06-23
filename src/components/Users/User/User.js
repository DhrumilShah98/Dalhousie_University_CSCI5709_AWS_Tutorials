import { Avatar, Button, Container, Grid, Typography } from '@material-ui/core';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { getUserDetails } from '../../../apis/index';
import useStyles from './styles';

export const User = () => {
    const classes = useStyles();
    const [userDetails, setUserDetails] = useState({
        message: '', status: false, data: {
            id: '',
            firstName: 'First name...',
            lastName: 'Last name...',
            email: 'Email...'
        }
    });
    const params = useParams();
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    useEffect(() => {
        getDetails();
    }, []);

    async function getDetails() {
        await getUserDetails(params.id).then((res) => {
            setUserDetails(res.data);
        }).catch((err) => {
            setUserDetails(err.response.data);
        });
    };

    return (
        <Container maxWidth="lg">
            <Grid className={classes.gridMain} container component="main" direction="column" justify="center" alignItems="flex-start">
                <Avatar className={classes.large} src={userDetails.data?.picture} alt={`${userDetails.data?.firstName} ${userDetails.data?.lastName}`} />
                <Typography className={classes.title} variant="body1">
                    {userDetails.data?.title}
                </Typography>
                <Typography variant="h2">
                    {`${userDetails.data?.firstName} ${userDetails.data?.lastName}`}
                </Typography>
                <Typography className={classes.email} variant="body1">
                    {userDetails.data?.email}
                </Typography>
                <Button className={classes.backButton} style={{ color: '#FFFFFF', backgroundColor: '#2581E6' }} onClick={goBack}>Go Back</Button>
            </Grid>
        </Container>
    );
};