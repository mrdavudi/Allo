import React, {useEffect, useState} from "react";
import ConversationList from "./messengerComponent/conversationList";
import '../../Css/messenger.css'
import axios from "axios";
import Header from '../messenger/messengerComponent/header'
import Messages from "./messengerComponent/Messages";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

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

    const [scrollContentBehavior, setScrollContentBehavior] = useState('auto')

    useEffect(() => {
        const scrollHeight1 = document.getElementById('content').scrollHeight
        document.getElementById('content').scrollTo(0, scrollHeight1)
        console.log(scrollHeight1)
        setScrollContentBehavior('smooth')
    }, [])

    return (
        <div className={'AllElementMessenger'}>
            <div className={'MessengerContainer'}>
                <div className={'leftSideMessenger'}>
                    <ConversationList/>
                </div>

                <div className={'rightSideMessenger'}>
                    <div className={'header'}>
                        <Header/>
                    </div>

                    <div className={'content'} id={'content'}
                         style={{scrollBehavior: scrollContentBehavior}}>

                        <Messages/>
                    </div>
                    <div className={'footer'}></div>
                </div>
            </div>
        </div>
    )
}

export default Messenger