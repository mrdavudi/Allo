import React, {useEffect, useState} from 'react';
import {Button} from 'antd';
import '../../Css/LoginAndRegister.css'


function CustomiseButton(props) {
    return (
        <React.Fragment>
            <Button
                className={'CostomiseButtonClass'}
                type={props.type}
                onClick={() => props.onClick()}
            >
                {props.value}</Button>
        </React.Fragment>
    )
}

export default CustomiseButton