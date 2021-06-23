import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({

    gridMain: {
        marginTop: theme.spacing(4),
    },
    large: {
        width: theme.spacing(20),
        height: theme.spacing(20),
        border: '3px solid #2581E6',
    },
    title: {
        marginTop: theme.spacing(2),
        marginLeft: theme.spacing(0.5),
        fontWeight: '900',
        color: '#2581E6'
    },
    email: {
        marginLeft: theme.spacing(0.5),
    },
    backButton: {
        marginTop: theme.spacing(2),
        height: 48,
        borderRadius: 10,
        padding: theme.spacing(0, 4, 0),
    }
}));