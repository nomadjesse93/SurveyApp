import {makeStyles} from "@material-ui/core/styles";
import {styled} from "@material-ui/core/styles";
import {IconButton} from "@material-ui/core";

export const StyledIconButton = styled(IconButton)({
    color:'black',

})

export const registerStyles = makeStyles((theme) => ({

    root:{
        display: 'flex',
        flexWrap: 'wrap',
        marginTop:theme.spacing(4),
        paddingTop: theme.spacing(2),
        color: theme.palette.text.secondary,
        height: '32rem',
        width: '35rem'
    },
    gridContainer:{
        display:"flex",
        justifyContent:"center",

    },
    gridItem:{
        textAlign:"center",
        marginTop:theme.spacing(1)
    },
    input:{
        width: theme.spacing(30)
    },
    label:{
        color:"black"
    },
    error:{
        textAlign:'start',
        fontSize: '0.8rem',
        color:'red',

    }


}))