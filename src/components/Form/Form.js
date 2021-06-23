import React, { useState } from 'react';
import { CssBaseline, Grid, TextField, Typography, Button, Hidden } from '@material-ui/core';
import { LottieAnimation } from '../LottieAnimation/LottieAnimation';
import userProfileCard from '../../animations/user-profile-card.json';
import { useHistory } from 'react-router-dom';
import { performLogin } from '../../apis/index';
import useStyles from './styles';

export const Form = () => {
    const classes = useStyles();
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({ emailValid: false, passwordValid: false });
    const [loginRes, setLoginRes] = useState({ message: '', status: true });
    const history = useHistory();

    async function login() {
        await performLogin(formData).then((res) => {
            if (res.status) {
                setLoginRes(res.data);
                history.push('/users');
            } else {
                setLoginRes({ message: 'Oops! Something went wrong.', status: false });
            }
        }).catch((err) => {
            setLoginRes(err.response.data);
        });
    };

    const validateFormData = () => {
        if (errors.emailValid && errors.passwordValid) {
            return true;
        } else {
            return false;
        }
    };

    const validate = (e) => {
        switch (e.target.name) {
            case "email":
                // Email regex source - https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
                const isEmailCorrect = RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(e.target.value);
                if (e.target.value === "" || e.target.value === null) {
                    errors["email"] = "Email name is required."
                    errors["emailValid"] = false;
                } else if (!isEmailCorrect) {
                    errors["email"] = "Please enter a valid email address."
                    errors["emailValid"] = false;
                } else {
                    errors["email"] = ""
                    errors["emailValid"] = true;
                }
                break;
            case "password":
                if (e.target.value === "" || e.target.value === null) {
                    errors["password"] = "Password is required."
                    errors["passwordValid"] = false;
                } else {
                    errors["password"] = ""
                    errors["passwordValid"] = true;
                }
                break;
            default:
                break;
        }
        setErrors(errors);
    };

    const onChange = (e) => {
        setLoginRes({ message: '', status: true });
        validate(e);
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const onSubmit = (e) => {
        setLoginRes({ message: '', status: true });
        e.preventDefault();
        if (validateFormData()) {
            login();
        }
    };

    return (
        <Grid container className={classes.root} component="main" direction="row" justify="center" alignItems="center">
            <CssBaseline />
            <Hidden xsDown>
                <Grid item sm={5} md={6}>
                    <div className={classes.lottie}>
                        <LottieAnimation lottie={userProfileCard} />
                    </div>
                </Grid>
            </Hidden>
            <Grid item sm={7} md={6}>
                <Typography className={classes.loginTitle} variant="h2" fontWeight="fontWeightBold">Log in.</Typography>
                <Typography className={classes.loginText}>Welcome Back. You've been missed! Let's sign you in.</Typography>
                <div className={classes.formCenter}>
                    <form className={classes.form} onSubmit={onSubmit} noValidate>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            autoComplete="off"
                            required
                            value={formData.email}
                            onChange={onChange}
                            error={errors["email"] ? true : false}
                            helperText={errors["email"]} />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            autoComplete="off"
                            required
                            value={formData.password}
                            onChange={onChange}
                            error={errors["password"] ? true : false}
                            helperText={errors["password"]} />
                        <Button
                            className={classes.submit}
                            style={{ color: '#FFFFFF', backgroundColor: '#2581E6' }}
                            fullWidth
                            disabled={!validateFormData()}
                            type="submit">
                            Submit
                        </Button>
                        {(!loginRes.status) ?
                            <Typography className={classes.errorResponse}>
                                {loginRes.message}
                            </Typography> :
                            null}
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};