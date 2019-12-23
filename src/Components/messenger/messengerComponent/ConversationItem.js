import React, {useEffect, useState} from "react";
import '../../../Css/conversation.css'
import {Badge} from 'antd';

let imageExists = require('image-exists');

function ConversationItem(props) {

    const [imgSrc, setImgSrc] = useState('')


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
            <div key={props.id} className={'ConversationItem'}>
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

export default ConversationItem