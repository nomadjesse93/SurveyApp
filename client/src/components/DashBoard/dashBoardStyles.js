import { makeStyles } from '@material-ui/core/styles';


const dashBoardStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexWrap:'wrap',
    },
    welcome:{
        fontWeight: "lighter",
        marginLeft:theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(2),
        color: theme.palette.secondary.main,
        backgroundColor:'#f0f0f0',
        boxShadow:'none'
    },
}));

export default dashBoardStyles;


