import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';


function NotLoggedIn(props) {
    return (
        <Fragment>
            <Link to='/'>
                <Button  className={`${props.classes.button} ${props.classes.DB_button}`}>
                    No account demo
                </Button>
            </Link>
            <Link to='/mysurveys'>
                <Button className={`${props.classes.button} ${props.classes.MS_button}`}>
                     About this App
                </Button>
            </Link>
            <Link to='/login'>
                <Button className={`${props.classes.button} ${props.classes.LOGIN_button}`}>
                    Contact Me
                </Button>
            </Link>
        </Fragment>
    );
}

export default NotLoggedIn;