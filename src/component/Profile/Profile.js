import { Avatar, Button, Card, CardActions, CardContent, CardHeader, CardMedia, CssBaseline, Paper, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

export const Profile = ({ userData, updateUserData, showProfile, updateShowProfile }) => {
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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas et fermentum mauris, sit amet lacinia turpis. Integer faucibus dui euismod nisl lacinia posuere. Cras eu leo auctor, pellentesque sem et, commodo tellus. Nullam sagittis dignissim dui.
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