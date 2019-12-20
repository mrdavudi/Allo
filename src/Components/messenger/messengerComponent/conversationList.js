import React from "react";
import ConversationItem from "./ConversationItem";

const conversations = [
    {
        id: 1,
        name: 'ali',
        latest_message: 'hello',
        unseen: 5,
        image: 'https://cdn4.iconfinder.com/data/icons/linecon/512/photo-512.png',
        email: 'ali123@gmail.com',
    },
    {
        id: 1,
        name: 'reza',
        latest_message: 'goodby',
        unseen: 5,
        image: 'https://f0.pngfuel.com/png/81/570/profile-logo-png-clip-art.png',
        email: 'reza123@gmail.com',
    }
]

function ConversationList() {
    return (
        <div className={'ConversationListContainer'}>
            {conversations.map((value, index) => {
                return (
                    <ConversationItem image={value.image}/>
                )
            })}
        </div>
    )
}

export default ConversationList