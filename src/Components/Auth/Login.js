import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebookSquare} from "@fortawesome/free-brands-svg-icons";
import {faGoogle} from "@fortawesome/free-brands-svg-icons";
import LoginCss from '../../Css/login.css'
import CustomiseInput from '../Inputs/textField'



/*const buttonStyle = makeStyles(theme => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));*/


function Login() {
    //const button = buttonStyle();

    return (
        <React.Fragment>
            <div className={'Container'}>
                <div className={'leftSide'}>
                    <h1>Hello, Friend!</h1>
                    <p>Enter yor personal details <br/> and start your chatting</p>
                </div>
                <div className={'rightSide'}>
                    <div className={'loginTitle'}>
                        <h1>Login to Allo</h1>
                    </div>
                    <div className={'otherLoginWays'}>
                        <button><FontAwesomeIcon className={'FontAwesomeFaceBook'} icon={faFacebookSquare}/> Continue
                            with Facebook
                        </button>
                        <button><FontAwesomeIcon className={'FontAwesomeGoogle'} icon={faGoogle}/> Continue with Google
                        </button>
                    </div>
                    <div className={'loginInputs'}>
                        <h2>Or</h2>
                        <div>
                            { CustomiseInput('simple') }
                        </div>
                        <div>
                            { CustomiseInput('password') }
                        </div>
                        <div>
                            <p>Forgot Password?</p>
                        </div>
                    </div>

                    <div className={'loginButtonOrSignUp'}>

                        <div>
                            <span>If ypu are a new user, </span>
                            <a href={'#'}>Signup here</a>
                        </div>
                    </div>
                </div>
            </div>

        </React.Fragment>
    )
}

export default Login