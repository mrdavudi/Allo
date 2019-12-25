import React from "react";
import {connect} from 'react-redux'
import '../../../Css/Messages.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

function Messages(props) {

    return (
        <div className={'ContentContainer'} id={'ContentContainer'}>

            <div style={{position: 'relative', height: 'auto', backgroundColor: 'red'}}>
                <div className={'scroll'}>
                    <a href={'#lastChild'}><FontAwesomeIcon icon={faAngleDoubleDown}/></a>
                </div>
            </div>

            {
                props.messageList.map((messages, index) => {
                    let senderOrReceiver = '',
                        rightOrLeftMessage = '',
                        textDate = '',
                        lastChildId = ''

                    textDate = messages.date.split('T')[1].split(':')

                    if (messages.sender.id === window.localStorage.getItem('userId')) {
                        senderOrReceiver = 'sender'
                        rightOrLeftMessage = 'messageContainerRight'

                    } else {
                        senderOrReceiver = 'receiver'
                        rightOrLeftMessage = 'messageContainerLeft'
                    }

                    if (index === props.messageList.length - 1) {
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

export default connect(mapStateToPropsForMessageList)(Messages)