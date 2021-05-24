import React from 'react';
import { useFormik } from 'formik';
import { SignUpValidationSchema } from '../validation/SignUpValidationSchema';
import { CssBaseline, Grid, makeStyles, Paper, TextField, Typography, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh'
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    formBackground: {
        backgroundColor: '#FFFFFF',
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const SignUp = () => {
    const classes = useStyles();

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: ''
        },
        validationSchema: SignUpValidationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square className={classes.formBackground}>
                <div className={classes.paper}>
                    <Typography component="h1" variant="h3" fontWeight="fontWeightBold">
                        Sign Up
                    </Typography>
                    <form onSubmit={formik.handleSubmit} className={classes.form} noValidate>
                        <TextField
                            fullWidth
                            margin="normal"
                            id="firstName"
                            type="text"
                            name="firstName"
                            label="First Name"
                            variant="outlined"
                            required
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                            helperText={formik.touched.firstName && formik.errors.firstName}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="lastName"
                            type="text"
                            name="lastName"
                            label="Last Name"
                            variant="outlined"
                            required
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                            helperText={formik.touched.lastName && formik.errors.lastName}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="email"
                            type="email"
                            name="email"
                            label="Email"
                            variant="outlined"
                            required
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="password"
                            type="password"
                            name="password"
                            label="Password"
                            variant="outlined"
                            required
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            error={formik.touched.password && Boolean(formik.errors.password)}
                            helperText={formik.touched.password && formik.errors.password}
                        />
                        <TextField
                            fullWidth
                            margin="normal"
                            id="confirmPassword"
                            type="password"
                            name="confirmPassword"
                            label="Confirm Password"
                            variant="outlined"
                            required
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                            helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                        />
                        <Button className={classes.submit} color="secondary" variant="contained" fullWidth type="submit">
                            Submit
                        </Button>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
};