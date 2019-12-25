import React from "react";
import CustomiseInput from "../../Inputs/CustomiseInput";

function getDataFromCustomiseInput(value, InputName) {

}

function Footer() {
    return (
        <CustomiseInput
            name={'sendMessage'}
            type={'text'}
            placeHolder={'Type a message'}
            icon={'plus-circle'}
            onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get data and save it on state
        />
    )
}

export default Footer