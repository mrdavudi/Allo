import React, {useState, useEffect} from 'react';
import validate from 'validate.js'
import {Input, Icon} from "antd";
import '../../Css/LoginAndRegister.css'
import handleValidation from "../validation/validateFunction";

/*
* this function validate your TextField
* you can add every validation that you want, and call it at end of function in condition
* */


function CustomiseInput(props) {

    /* state for errors */
    const [fieldError, setFieldError] = React.useState({
        EmailError: '',
        PasswordError: '',
        visibility: 'none',
    });

    let myVar = {}

    useEffect(() => {
        myVar = fieldError
        //console.log('MyVar:::',myVar)
    })

    /* show/hide error text
    /* result is a value(an error or undefined) that taken from 'handlevalidation' function
    */
    function showHideError(result, fieldName) {
        if (result === undefined) {
            setFieldError({...fieldError, error: '', visibility: 'none'})
        } else {

            if (fieldName === 'email') {
                let EmailLenth = result.EmailValidation[0].length
                setFieldError({
                    ...fieldError,
                    EmailError: result.EmailValidation[0].slice(16, EmailLenth),
                    visibility: 'block'
                })
            } else {
                let PasswordLenth = result.PasswordValidation[0].length
                setFieldError({
                    ...fieldError,
                    PasswordError: result.PasswordValidation[0].slice(20, PasswordLenth),
                    visibility: 'block'
                })
            }
        }

    }

    return (
        <div className={'InputLabelContainer'}>
            <div className={'InputContainer'}>
                <Input
                    name={props.name}
                    className={'CustomiseInputClass'}
                    type={props.type}
                    placeholder={props.placeHolder}
                    prefix={<Icon type={props.icon} style={{color: 'rgba(0,0,0,.25)'}}/>}
                    onChange={(event) => {
                        props.onChange(event.target.value, event.target.name)
                    }}
                    onBlur={(event) => {
                        let result = handleValidation(event.target.name, event.target.value)

                        /* show/hide errors for textFields */
                        showHideError(result, event.target.name)

                        //send error to login page
                        props.onBlur(fieldError)

                    }}
                />
            </div>


            {/* error section */}
            <div className={'labelErrorLogin'} style={{textAlign: 'right', marginBottom: '1vh', fontSize: '1vw', display: fieldError.visibility}}>
                <span>
                    {fieldError.EmailError + fieldError.PasswordError}
                </span>
            </div>
        </div>
    )
}

export default CustomiseInput
