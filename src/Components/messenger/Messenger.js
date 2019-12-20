import React from "react";
import ConversationList from "./messengerComponent/conversationList";

function Messenger() {
    return (
        <div className={'Container'}>
            <div className={'rightSide'}>
                <ConversationList/>
            </div>
            <div className={'leftSide'}>
                <div className={'header'}></div>
                <div className={'content'}></div>
                <div className={'footer'}></div>
            </div>
        </div>
    )
}

export default Messenger