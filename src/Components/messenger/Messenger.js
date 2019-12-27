import React from "react";
import ConversationList from "./messengerComponent/conversationList";
import '../../Css/messenger.css'
import Header from '../messenger/messengerComponent/header'
import Messages from "./messengerComponent/Messages";
import Footer from "./messengerComponent/footer";


function Messenger(props) {

    function isLogin() {
        if(window.localStorage.getItem('token') !== ''){
            console.log('aaaa')
        }
    }

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

                    <div className={'content'} id={'content'}>
                        <Messages/>
                    </div>
                    <div className={'footer'}>
                        <Footer/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Messenger