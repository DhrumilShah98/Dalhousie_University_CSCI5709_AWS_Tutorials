import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CssBaseline, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const Profile = ({ userData, updateUserData, updateShowProfile }) => {
    const classes = useStyles();

    const goBackToSignUp = () => {
        updateUserData({
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

        updateShowProfile({
            profile: false,
        });
    }

    return (
        <div className={`${classes.center} ${classes.body}`}>
            <CssBaseline />
            <Card className={classes.card} component={Paper} elevation={6}>
                <CardHeader
                    avatar={<Avatar className={classes.avatar}>
                        {`${userData.firstName.substring(0, 1)}${userData.lastName.substring(0, 1)}`}
                    </Avatar>}
                    title={`${userData.firstName} ${userData.lastName}`}
                    subheader={userData.email} />
                <CardMedia
                    className={classes.image}
                    image="https://source.unsplash.com/random" />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Coding...
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    First and foremost, I love writing code. For me, it is like exercising my mind. Not only did it help me in improving my problem solving and logic building approach, but also to be more confident with my abilities.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" color="secondary" variant="contained" fullWidth onClick={goBackToSignUp}>
                        Go To SignUp
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}