import React from "react";
import {connect} from 'react-redux'
import {Button} from "antd";
import {withRouter} from "react-router"


function Header(props) {

    function doLogOut() {
        //window.localStorage.removeItem('userId')
        //window.localStorage.removeItem('token')
        props.history.push('/auth/signin')
    }


    return (
        <div className={'headerContainer'}>
            <div className={'userEmail'}>
                <h3>{props.userEmail}</h3>
            </div>
            <div className={'logOut'} style={{color: '#fff'}}>
                <Button onClick={() => doLogOut()} className={'btnDefault'}>LogOut</Button>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => ({
    userEmail: state.userEmail
})
export default connect(mapStateToProps)(withRouter(Header))