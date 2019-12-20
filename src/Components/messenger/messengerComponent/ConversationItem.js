import React from "react";

function ConversationItem(props) {
    return (
        <div className={'ConversationItem'}>
            <div className={'leftSide'}>
                <img src={props.image}/>
            </div>
            <div className={'rightSide'}></div>
        </div>
    )
}

export default ConversationItem