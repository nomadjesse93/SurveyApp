import React from "react";

export const EmailInput = (props) => {

    return(
        <div className={styles.container}>

            <form>
                <div className={styles.group}>
                    <input type={props.type} required/>
                    <span className={styles.highlight}></span>
                    <span className={styles.bar}></span>
                    <label>{props.text}</label>

                 </div>
            </form>


        </div>
    )
}
// <FormControl>
//
//
//     <Typography hidden={errors ? false : true} className={classes.error}>{errors ? errors.find(el => {  const passwordCheck = /(Password)/g;;  return passwordCheck.test(el)}) : null}</Typography>
// </FormControl>