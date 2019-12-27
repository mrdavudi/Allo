import React, {useState, useEffect, useRef} from "react";
import {connect} from 'react-redux'
import '../../../Css/Messages.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";

function Messages(props) {

    const [messageList, setMessageList] = useState([])

    const interval = setInterval(() => {
            getMessageListUpdate()
        }
        , 2000)


    function getMessageListUpdate() {
        let data = new FormData()
        data.append('token', window.localStorage.getItem('token'))
        data.append('conversation_id', window.localStorage.getItem('conversationId'))
        data.append('size', '40')
        data.append('date', Math.round(new Date() / 1000))

        axios.post('http://click.7grid.ir/conversation/details/', data
        )
            .then(function (response) {
                setMessageList(response.data.data.messages)
                clearInterval(interval)

            })
            .catch(function (error) {
                console.log('GetMessageFalse:::', error);
            });
    }

    useEffect(() => {
        setMessageList(props.messageList)
        clearInterval(interval)
    }, [])

    return (
        <div className={'ContentContainer'} id={'ContentContainer'}>

            <div style={{position: 'relative', height: 'auto'}}>
                <div className={'scroll'}>
                    <a href={'#lastChild'}><FontAwesomeIcon icon={faAngleDoubleDown}/></a>
                </div>
            </div>

            {
                messageList &&
                messageList.map((messages, index) => {
                    let senderOrReceiver = '',
                        rightOrLeftMessage = '',
                        textDate = '',
                        lastChildId = ''

                    textDate = messages.date.split('T')[1].split(':')

                    if (messages.sender.id === parseInt(window.localStorage.getItem('userId'))) {
                        senderOrReceiver = 'sender'
                        rightOrLeftMessage = 'messageContainerRight'

                    } else {
                        senderOrReceiver = 'receiver'
                        rightOrLeftMessage = 'messageContainerLeft'
                    }


                    if (index === messageList.length - 1) {
                        lastChildId = 'lastChild'
                    }

                    return (
                        <div className={senderOrReceiver} key={index} id={lastChildId}>
                            <div className={rightOrLeftMessage}>
                                <div className={'textMessage'}>
                                    <span>{messages.text}</span>
                                </div>
                                <div className={'messageTime'}>
                                    <span>{textDate[0] + ':' + textDate[1]}</span>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>


    )
}


const mapStateToPropsForMessageList = (state) => ({
    messageList: state.messageList
})

const mapStateToPropsForGetMessagesFromFooter = (state) => ({
    messagesFooter: state.messagesFooter
})

export default connect(mapStateToPropsForMessageList, mapStateToPropsForGetMessagesFromFooter)(Messages)