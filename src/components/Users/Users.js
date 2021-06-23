import React, { useState, useEffect } from 'react';
import { Avatar, Card, CardHeader, Container, Grid, TextField, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { getAllUsers } from '../../apis/index';
import useStyles from './styles';

export const Users = () => {
    const classes = useStyles();
    const [users, setUsers] = useState({ message: '', status: false, data: [] });
    const history = useHistory();

    useEffect(() => {
        getUsers();
    }, []);

    async function getUsers() {
        await getAllUsers().then((res) => {
            if (res.data !== null && res.data.data !== null) {
                res.data.data.forEach(function (user) {
                    user.display = true;
                });
            }
            setUsers(res.data);
        }).catch((err) => {
            setUsers(err.response.data);
        });
    };

    const filterUsers = (e) => {
        if (e.target.value !== null || e.target.value !== "") {
            users.data.forEach(function (user) {
                const firstName = user.firstName.toLowerCase();
                const lastName = user.firstName.toLowerCase();
                const fullName = (user.firstName + " " + user.lastName).toLowerCase();
                const searchQuery = e.target.value.toLowerCase();
                if (firstName.includes(searchQuery) || lastName.includes(searchQuery) || fullName.includes(searchQuery)) {
                    user.display = true;
                } else {
                    user.display = false;
                }
            });
        } else {
            users.data.forEach(function (user) {
                user.display = true;
            });
        }
        setUsers({
            ...users,
            data: users.data
        });
    };

    const viewUserDetails = (userId) => {
        history.push(`/users/${userId}`);
    }

    return (
        <Container maxWidth="lg">
            <TextField
                fullWidth
                margin="normal"
                id="search"
                type="text"
                name="search"
                label="Search Name"
                variant="outlined"
                autoComplete="off"
                required
                onChange={filterUsers} />
            <Grid container component="main" alignItems="stretch" spacing={3}>
                {users.data.map((user) => {
                    if (user.display) {
                        return <Grid key={user.id} item xs={12} sm={12} md={6} lg={4}>
                            <div onClick={() => viewUserDetails(user.id)}>
                                <Card className={classes.card} key={user.id}>
                                    <CardHeader avatar={<Avatar src={user.picture} />}
                                        title={<Typography variant="subtitle1">{`${user.firstName} ${user.lastName}`}</Typography>}
                                        subheader={<Typography variant="subtitle2">{user.email}</Typography>}
                                    />
                                </Card>
                            </div>
                        </Grid>
                    } else {
                        return null;
                    }
                })}
            </Grid>
        </Container>
    );
};