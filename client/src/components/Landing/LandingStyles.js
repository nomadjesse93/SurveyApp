import {makeStyles} from "@material-ui/core/styles";


export const landingStyles = makeStyles((theme) => ({
    root:{
        margin:0,
        width:'100%',
    },
    container: {
        alignContent: "center",
        marginTop:'5rem',
        height:'200px',
        justifyContent:'center',
    },
    title:{
        textAlign:'center',
        color:theme.palette.secondary.main,
        fontWeight: "bolder",
        maxWidth:'none',
    },
    subtitle:{
        textAlign:'center',
        fontSize:"1.2rem",
        color:theme.palette.secondary.light,
        fontWeight: "bold",
        width:'95%',
        maxWidth:'none',
    },
    button:{
        backgroundColor: theme.palette.secondary.main,
        color:theme.palette.primary.main,
        marginTop:'2rem',
        marginRight:'0.6rem',
        "&:hover": {
                 fontSize:"0.93rem",
            backgroundColor:theme.palette.secondary.main
            }



    }

}));
