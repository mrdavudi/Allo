import React, {useEffect, useState} from "react";
import '../../../Css/conversation.css'
import {Badge} from 'antd';
import {SaveEmail} from '../../action/action'
import {CreateConversation} from '../../action/action'
import {connect} from 'react-redux'
import axios from "axios";
import {Avatar} from "antd";

let imageExists = require('image-exists');

function ConversationItem(props) {

    const [imgSrc, setImgSrc] = useState('')


    function createConversation(email, userId) {

        props.dispatch(SaveEmail(email)) //send email to redux for header

        //create conversation
        let data = new FormData()
        data.append('token', window.localStorage.getItem('token'))
        data.append('user_id', userId)

        axios.post('http://click.7grid.ir/conversation/', data)
            .then(function (response) {
                window.localStorage.setItem('conversationId', response.data.data.conversation_id)
                props.dispatch(CreateConversation(response.data.data.messages))

                /*//Seen message***********************************

                let data = new FormData()
                data.append('token', window.localStorage.getItem('token'))
                data.append('conversation_id', response.data.data.conversation_id)

                axios.post('https://api.paywith.click/conversation/seen/', data)
                    .then(function (response) {
                        console.log('responseSeen::', response)
                    })
                    .catch(function (error) {
                        console.log(error);
                    });

                //seen message ************************************/

            })
            .catch(function (error) {
                console.log(error);
            });


    }


    //check if image exist
    //if not then set default image
    useEffect(() => {

        let src = props.image;

        imageExists(src, (exists) => {
            if (exists) {
                setImgSrc(props.image)
            } else {
                setImgSrc('none')
            }
        });

    }, [])

    //if image is Exist so set image
    //otherwise set two characters of his name
    function ImageAvatar() {
        if (imgSrc === 'none') {
            return (
                <Avatar
                    size={50}
                    style={{border: '1px solid #aaa'}}
                >
                    {props.email.slice(0, 2)}
                </Avatar>
            )
        } else {
            return (
                <Avatar
                    size={50}
                    src={imgSrc}
                    style={{border: '1px solid #aaa'}}
                />
            )
        }
    }

    if (props.email) {
        return (
            <div key={props.id} className={'ConversationItem'}
                 onClick={() => createConversation(props.email, props.id)}>

                <div className={'leftSideItem'}>

                    {ImageAvatar()}

                </div>
                <div className={'rightSideItem'}>
                    <div className={'userInfo'}>
                        <h4>
                            {
                                props.email.split('@')[0] + ' ' + props.email.split('@')[1].split('.')[0]
                            }
                        </h4>
                    </div>
                    <div className={'unseenMessage'}>
                        <Badge
                            count={props.unseenMessage}
                            style={{backgroundColor: '#075E55', border: '1px solid #075E55'}}>
                        </Badge>
                    </div>
                </div>
            </div>
        )
    }
    return ''
}

const mapDispatchToPropsForSaveEmail = (dispatch) => ({
    dispatch: dispatch
})

const mapDispatchToPropsForMessageList = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToPropsForSaveEmail, mapDispatchToPropsForMessageList)(ConversationItem)