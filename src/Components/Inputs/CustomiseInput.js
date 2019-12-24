import React from 'react';
import {Input, Icon} from "antd";
import '../../Css/LoginAndRegister.css'
import handleValidation from '../validation/ValidateFunction'

/*
* this function validate your TextField
* you can add every validation that you want, and call it at end of function in condition
* */


function CustomiseInput(props) {

    /* state for errors */
    const [fieldError, setFieldError] = React.useState({
        Error: '',
        visibility: 'none',
    });

    return (
        <div className={'InputLabelContainer'}>
            <div className={'InputContainer'}>
                <Input
                    name={props.name}
                    className={'CustomiseInputClass'}
                    style={{backgroundColor: 'red'}}
                    type={props.type}
                    placeholder={props.placeHolder}
                    prefix={<Icon type={props.icon} style={{color: 'rgba(0,0,0,.25)'}}/>}
                    onChange={(event) => {
                        props.onChange(event.target.value, event.target.name)
                    }}
                    onBlur={(event) => {
                        let result = handleValidation(event.target.name, event.target.value)

                        if (result !== null) {
                            setFieldError({
                                ...fieldError,
                                Error: result,
                                visibility: 'block'
                            })

                        } else {
                            setFieldError({
                                ...fieldError,
                                visibility: 'none'
                            })
                        }

                    }}
                />
            </div>


            {/* error section */}
            <div className={'labelErrorLogin'}
                 style={{textAlign: 'right', marginBottom: '1vh', fontSize: '0.8vw', display: fieldError.visibility}}>
                <span>
                    {fieldError.Error}
                </span>
            </div>
        </div>
    )
}

export default CustomiseInput
