import React from "react";
import {connect} from 'react-redux'
import {CreateConversation} from '../../action/action'
import '../../../Css/content.css'

function Content(props) {
    return (
        <React.Fragment>
            <div className={'messageContainer'}>
                <div className={'textMessage'}>
                    <span>zlirezazlirezazlirezazlirezazlirezazlirezazlirezazlireza</span>
                </div>
                <div className={'messageTime'}>
                    <span>12:19</span>
                </div>
            </div>
        </React.Fragment>
    )
}


const mapStateToPropsForMessageList = (state) => ({
    messageList: state.messageList
})

export default connect(mapStateToPropsForMessageList)(Content)