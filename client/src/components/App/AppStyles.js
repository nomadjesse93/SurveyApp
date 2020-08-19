import {makeStyles} from "@material-ui/core/styles";


export const appStyles = makeStyles((theme) => ({
root:{
    margin:0,

},
    dashBoard:{
     display:"flex",
        justifyContent:'center',
    },
    login:{
        display: "flex",
        margin: "auto",
        justifyContent:"center",
        marginTop:theme.spacing(10)
    },
    register:{
        display: "flex",
        margin: "auto",
        justifyContent:"center",
        marginTop:theme.spacing(10)
    }
}));
