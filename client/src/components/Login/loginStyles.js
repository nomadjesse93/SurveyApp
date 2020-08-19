import makeStyles from "@material-ui/core/styles/makeStyles";

export const styles = makeStyles((theme)=>({
    container:{
        border:'solid 1px black',
        height:'30rem',
        width:'45%'
    },

    email:{
        height: '5rem',
        justifyContent:'center',
        width:'85%',
        marginTop:'35%'
    },
    password:{
        height: '5rem',
        justifyContent:'center',
        width:'85%',
        marginBottom:'8rem'
    }
}))