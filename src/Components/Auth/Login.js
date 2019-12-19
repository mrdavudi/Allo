import React, {useState} from 'react';
import CustomiseInput from '../Inputs/CustomiseInput'
import '../../Css/LoginAndRegister.css'
import '../../Css/login.css'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import validateFunction from "../validation/ValidateFunction";
import {Button} from "antd";
import {ToastProvider, useToasts} from 'react-toast-notifications'

window.document.title = 'Allo login'

function Login(props) {

    /* state for TextFields */
    const [field, setField] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('')

    const {addToast} = useToasts()

    function doLogin() {
        let Emailvalidate = validateFunction('email', field.email)
        let validate = validateFunction('email', field.email)

        if (validate === null) {

            axios.post('http://click.7grid.ir/auth/signin/', {
                email: field.email,
                password: field.password
            })
                .then(function (response) {
                    window.localStorage.setItem('token', response.data.data.token)
                    console.log(response.data.data.token)
                    return <Redirect to={'/auth/signup'}/>
                })
                .catch(function (error) {
                    let errorNumber = error.message.replace(/^\D+/g, '');

                    switch (errorNumber) {
                        case '400':
                            setError('400')
                            break
                        case '401':
                            setError('401')
                            break
                        default:
                            setError(errorNumber)
                    }
                });
        } else {
            setError(validate)
            addToast(validate, {
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

                <div className={'leftSide loginImg'}></div>

                <div className={'rightSide'}>
                    <div className={'loginTitle'}>
                        <h1>Hello Friend!</h1>
                        <p>Enter your personal detail to LogIn</p>
                    </div>

                    <div className={'loginInputs'}>
                        <label>{error}</label>
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
                            <a href={'#'}>Forgot Password?</a>
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

export default Login