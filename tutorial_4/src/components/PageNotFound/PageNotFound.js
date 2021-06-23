import React from 'react';
import { Grid } from '@material-ui/core';
import { LottieAnimation } from '../LottieAnimation/LottieAnimation';
import pageNotFound from '../../animations/page-not-found.json';

export const PageNotFound = () => {
    return (
        <Grid container component="main" direction="row" justify="center" alignItems="center">
            <div style={{ width: '80%' }}>
                <LottieAnimation lottie={pageNotFound} />
            </div>
        </Grid>
    );
};