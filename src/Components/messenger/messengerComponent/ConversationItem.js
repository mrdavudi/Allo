import React, {useEffect, useState} from "react";
import '../../../Css/conversation.css'
import {Badge} from 'antd';
import {SaveEmail} from '../../action/action'
import {CreateConversation} from '../../action/action'
import {connect} from 'react-redux'
import axios from "axios";

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
                console.log(response.data.data.messages);
                props.dispatch(CreateConversation(response.data.data.messages))
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
                setImgSrc(require('../../../image/defaultProfilePhoto2.png'))
            }
        });

    }, [])

    if (props.email) {
        return (
            <div key={props.id} className={'ConversationItem'}
                 onClick={() => createConversation(props.email, props.id)}>

                <div className={'leftSideItem'}>
                    <img src={imgSrc} alt={'PF'} style={{width: '4vw', height: '4vw'}}/>
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
                            style={{backgroundColor: '#aaa'}}>
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

const mapDispatchTopropsForMessageList = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToPropsForSaveEmail, mapDispatchTopropsForMessageList)(ConversationItem)