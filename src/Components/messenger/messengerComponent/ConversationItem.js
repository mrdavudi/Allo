import React from "react";

function ConversationItem(props) {
    return (
        <div className={'ConversationItem'}>
            <div className={'leftSideItem'}>
                <img src={props.image} width={'40px'} height={'40px'}/>
            </div>
            <div className={'rightSideItem'}>
                <div className={'userInfo'}></div>
                <div className={'unseenMessage'}></div>
            </div>
        </div>
    )
}

export default ConversationItem