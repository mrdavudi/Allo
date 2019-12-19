import React, {useState} from 'react';
import CustomiseInput from '../Inputs/CustomiseInput'
import '../../Css/LoginAndRegister.css'
import '../../Css/signUp.css'
import axios from 'axios'
import {Link, Redirect} from 'react-router-dom'
import {createBrowserHistory} from 'history';
import {Button} from "antd";

window.document.title = 'Allo SignUp'
const history = createBrowserHistory()

function SignUp(props) {

    /* state for TextFields */
    const [field, setField] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState('')


    function doSignUp() {

        axios.post('http://click.7grid.ir/auth/signup/', {
            email: field.email,
            password: field.password
        })
            .then(function (response) {
                window.localStorage.setItem('token', response.data.data.token)
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
                        setError('try again!')
                }
            });
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

export default SignUp