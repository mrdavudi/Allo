import React, {useState} from 'react';
import CustomiseInput from '../../Inputs/CustomiseInput'
import '../../../Css/LoginAndRegister.css'
import '../../../Css/login.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import validateFunction from "../../validation/ValidateFunction";
import {Button} from "antd";
import {useToasts} from 'react-toast-notifications'
import {withRouter} from "react-router-dom";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

function Login(props) {

    /* state for TextFields */
    const [field, setField] = useState({
        email: '',
        password: ''
    });

    const {addToast, removeAllToasts} = useToasts()

    function doLogin() {
        let emailValidate = validateFunction('email', field.email)
        let passwordValidate = validateFunction('password', field.password)

        if (emailValidate === null && passwordValidate === null) {
            axios.post('http://click.7grid.ir/auth/signin/', {
                email: field.email,
                password: field.password
            })
                .then(function (response) {
                    window.localStorage.setItem('token', response.data.data.token)
                    window.localStorage.setItem('userId', response.data.data.profile.id)
                    props.history.push('/messenger')
                })
                .catch(function (error) {

                    let errorNumber = error.message.replace(/^\D+/g, '');
                    switch (errorNumber) {
                        case '400':
                            removeAllToasts()
                            addToast('Complete fields!', {
                                appearance: 'error',
                                autoDismiss: true,
                            })
                            break
                        case '401':
                            removeAllToasts()
                            addToast('Email or password is wrong!', {
                                appearance: 'error',
                                autoDismiss: true,
                            })
                            break
                        default:
                            removeAllToasts()
                            addToast('Try agaiin!', {
                                appearance: 'error',
                                autoDismiss: true,
                            })
                    }
                });
        }
    }


    function getDataFromCustomiseInput(value, InputName) {
        setField({...field, [InputName]: value})
    }

    return (
        <React.Fragment>
            <div className={'Container'}>

                <div className={'leftSide loginImg'}></div>

                <div className={'rightSide'}>
                    <div className={'loginTitle'}>
                        <h1>Hello Friend!</h1>
                        <p>Enter your personal detail to LogIn</p>
                        <div className={'home'}>
                            <Link
                                to={'/'}
                                className={'btnDefault'}>
                                {<FontAwesomeIcon icon={faHome}/>}
                            </Link>
                        </div>
                    </div>

                    <div className={'loginInputs'}>

                        <CustomiseInput
                            name={'email'}
                            type={'email'}
                            placeHolder={'Enter your Email'}
                            icon={'mail'}
                            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get dada and save it on state
                        />

                        <CustomiseInput
                            name={'password'}
                            type={'password'}
                            placeHolder={'Enter your password'}
                            icon={'lock'}
                            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get dada and save it on state
                        />

                        <div style={{textAlign: 'right'}}>
                            <Link to={''}>Forgot password?</Link>
                        </div>

                    </div>

                    <div className={'loginButtonOrSignUp'}>
                        <div>
                            <Button
                                className={'btnPrimary'}
                                onClick={() => doLogin()}>
                                {'SIGNIN'}
                            </Button>
                        </div>
                        <div>
                            <Link
                                to={'/auth/signup'}
                                className={'btnDefault'}>
                                {'SIGNUP'}
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(Login)