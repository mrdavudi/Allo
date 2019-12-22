import React, {useState} from 'react';
import CustomiseInput from '../../Inputs/CustomiseInput'
import '../../../Css/LoginAndRegister.css'
import '../../../Css/signUp.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
import {Button} from "antd";
import {withRouter} from "react-router-dom";
import validateFunction from "../../validation/ValidateFunction";
import {useToasts} from "react-toast-notifications";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faHome} from '@fortawesome/free-solid-svg-icons'

function SignUp(props) {

    /* state for TextFields */
    const [field, setField] = useState({
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [error] = useState('')

    const {addToast, removeAllToasts} = useToasts()

    function doSignUp() {
        let emailValidate = validateFunction('email', field.email)
        let passwordValidate = validateFunction('password', field.password)

        if (emailValidate === null
            && passwordValidate === null
            && field.password === field.confirmPassword) {

            axios.post('http://click.7grid.ir/auth/signup/', {
                email: field.email,
                password: field.password
            })
                .then((response) => {
                    window.localStorage.setItem('token', response.data.token)
                    window.localStorage.setItem('userId', response.data.id)
                    props.history.push('/messenger')
                })
                .catch((error) => {
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
                        case '409':
                            removeAllToasts()
                            addToast('This email is already taken!', {
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
        } else if (field.password !== field.confirmPassword) {
            removeAllToasts()
            addToast('Confirm password is not equal to password', {
                appearance: 'error',
                autoDismiss: true,
            })
        }
    }


    function getDataFromCustomiseInput(value, InputName) {
        setField({...field, [InputName]: value})
    }


    return (
        <React.Fragment>
            <div className={'Container'}>

                <div className={'leftSide signUpImg'}></div>

                <div className={'rightSide'}>
                    <div className={'loginTitle'}>
                        <h1>Welcome Back!</h1>
                        <p>Enter your personal detail to SignUp</p>
                        <div className={'home'}>
                            <Link
                                to={'/'}
                                className={'btnDefault'}>
                                {<FontAwesomeIcon icon={faHome}/>}
                            </Link>
                        </div>
                    </div>

                    <div className={'loginInputs'}>
                        <label>{error}</label>
                        <CustomiseInput
                            name={'email'}
                            type={'email'}
                            placeHolder={'Enter your Email'}
                            icon={'mail'}
                            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get data and save it on state
                        />

                        <CustomiseInput
                            name={'password'}
                            type={'password'}
                            placeHolder={'Enter your password'}
                            icon={'lock'}
                            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get data and save it on state
                        />

                        <CustomiseInput
                            name={'confirmPassword'}
                            type={'password'}
                            placeHolder={'re-Enter your password'}
                            icon={'lock'}
                            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get data and save it on state
                        />

                    </div>

                    <div className={'loginButtonOrSignUp'}>
                        <div>

                            <Button
                                className={'btnPrimary'}
                                onClick={() => doSignUp()}>
                                {'SIGNUP'}
                            </Button>
                        </div>
                        <div>
                            <Link
                                to={'/auth/signin'}
                                className={'btnDefault'}>
                                {'SIGNIN'}
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </React.Fragment>
    )
}

export default withRouter(SignUp)