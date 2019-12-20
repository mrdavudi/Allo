import React from "react";
import ConversationList from "./messengerComponent/conversationList";
import '../../Css/messenger.css'

function Messenger() {
    return (
        <div className={'AllElementMessenger'}>
            <div className={'MessengerContainer'}>
                <div className={'leftSideMessenger'}>
                    <div className={'header'}></div>
                    <div className={'content'}></div>
                    <div className={'footer'}></div>
                </div>

                <div className={'rightSideMessenger'}>
                    <ConversationList/>
                </div>
            </div>
        </div>
    )
}

export default Messenger