import makeStyles from "@material-ui/core/styles/makeStyles";


export const surveyStyles = makeStyles((theme) => ({
    root: {
        position:"relative",
        zIndex:1,
        flexGrow: 1,
        margin:theme.spacing(2),
        width:'inherit',
        height:'50rem',
        border:'1px solid black'
    },
    paper: {
        position: "fixed",
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: theme.spacing(16),
            height: theme.spacing(16),
        },
        backgroundColor:'white',
        height: "46.9rem",
        width:'52%',
        zIndex:-1
    },

    main:{
      height:'47rem',
        border:'1px solid red',
    },

    subHeading:{},

    sidebar:{
        height:'47rem',
        border:'1px solid red',
    },
    menuButton:{
        margin:'12rem 0 0 0'

    },
    questionContainer:{
        margin:'12rem 0 0 13rem',
        width:'100%',
    },
    buttonContainer:{
        margin:'0 15rem 20rem 13rem'
    }
}));