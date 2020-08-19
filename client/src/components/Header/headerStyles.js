import { makeStyles } from '@material-ui/core/styles';


const headerStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        flexWrap:'wrap',

    },
    gridContainer:{

    },
    header:{
        backgroundColor:theme.palette.secondary.main,
        height: '5rem',
        verticalAlign: "middle",
    },
    imgDiv:{
        position:"absolute",
        margin:"0.7rem 0 0.5rem 1rem",
        height:'2.6rem',
        width:'2.6rem',
    },
    img:{

        display: 'block',
        height:'100%',
        width:'100%',
        scale:'520%'
    },
    button:{
        borderRadius:'6px',
        color: theme.palette.primary.main,
        "focus": "cursor",
        marginTop:'1rem',
        marginLeft:'1rem'
    },
    DB_button:{
        marginLeft:"75rem"
    },
    MS_button:{

    },
    LOGIN_button:{

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

export default headerStyles;


