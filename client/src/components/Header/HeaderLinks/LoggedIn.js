import React, {Fragment} from "react";
import Button from "@material-ui/core/Button";
import {Link} from 'react-router-dom';


function LoggedIn(props) {
    return (
        <Fragment>
                <Link to='/'>
                    <Button  className={`${props.classes.button} ${props.classes.DB_button}`}>
                        DashBoard
                    </Button>
                </Link>
                <Link to='/mysurveys'>
                    <Button className={`${props.classes.button} ${props.classes.MS_button}`}>
                        My Survey's
                    </Button>
                </Link>
                <Link to='/login'>
                    <Button className={`${props.classes.button} ${props.classes.LOGIN_button}`}>
                        Login
                    </Button>
                </Link>
            <Link to='/createSurvey'>
                <Button className={`${props.classes.button} ${props.classes.LOGIN_button}`}>
                    Create Survey
                </Button>
            </Link>

        </Fragment>
    );
}

export default LoggedIn;