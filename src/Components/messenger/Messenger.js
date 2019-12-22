import React from "react";
import ConversationList from "./messengerComponent/conversationList";
import '../../Css/messenger.css'
import axios from "axios";

function send() {
    let data = new FormData()
    data.append('token', window.localStorage.getItem('token'))
    data.append('conversation_id', 70)
    data.append('text', 'hello ali')

    axios.post('http://click.7grid.ir/conversation/create/', data)
        .then(function (response) {
            console.log('Send:::', response);

        })
        .catch(function (error) {
            console.log(error);
        });
}

function createConversation() {

    let data = new FormData()
    data.append('token', window.localStorage.getItem('token'))
    data.append('user_id', 64)

    axios.post('http://click.7grid.ir/conversation/', data)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function getConversation() {
    let data2 = new FormData()
    data2.append('token', window.localStorage.getItem('token'))
    data2.append('conversation_id', 69)
    data2.append('size', '10')
    data2.append('date', parseInt('2019-12-22'))

    axios.post('http://click.7grid.ir/conversation/details/', data2
    )
        .then(function (response) {
            console.log('GetMessageTrue:::', response);
        })
        .catch(function (error) {
            console.log('GetMessageFalse:::', error);
        });
}

function Messenger() {
    return (
        <div className={'AllElementMessenger'}>
            <div className={'MessengerContainer'}>
                <div className={'leftSideMessenger'}>
                    <ConversationList/>
                </div>

                <div className={'rightSideMessenger'}>
                    <div className={'header'}></div>
                    <div className={'content'}>
                        <button onClick={() => send()}>send</button>

                        <button onClick={() => createConversation()}>create</button>
                        <button onClick={() => getConversation()}>getconversation</button>
                    </div>
                    <div className={'footer'}></div>
                </div>
            </div>
        </div>
    )
}

export default Messenger