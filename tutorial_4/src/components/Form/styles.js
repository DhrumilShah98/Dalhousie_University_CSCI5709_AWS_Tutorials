import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: '100vh',
        backgroundColor: '#FFFFFF',
    },
    lottie: {
        width: '80%',
        margin: 'auto',
    },
    loginTitle: {
        color: '#2581E6',
        fontWeight: '700',
        marginLeft: theme.spacing(4.5),
    },
    loginText: {
        color: '#000000',
        fontWeight: '500',
        fontSize: '1.3em',
        marginLeft: theme.spacing(4.5),
    },
    formCenter: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    form: {
        width: '90%',
        marginTop: theme.spacing(2),
    },
    submit: {
        margin: theme.spacing(3, 0, 0),
        height: 48,
        borderRadius: 10,
    },
    errorResponse: {
        color: '#EF6161',
        fontWeight: '500',
        fontSize: '1em',
        margin: theme.spacing(1, 0, 0),
    }
}));