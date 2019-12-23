import React from "react";
import {connect} from 'react-redux'

function Header(props) {
    return (
        <React.Fragment>
            <h3>{props.userEmail}</h3>
        </React.Fragment>
    )
}


const mapStateToProps = (state) => ({
    userEmail: state.userEmail
})
export default connect(mapStateToProps)(Header)