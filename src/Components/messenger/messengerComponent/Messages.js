import React from "react";
import {connect} from 'react-redux'
import {CreateConversation} from '../../action/action'
import '../../../Css/Messages.css'

function Messages(props) {
    return (
        <div className={'ContentContainer'}>

            <div className={'sender'}>
                <div className={'messageContainerRight'}>
                    <div className={'textMessage'}>
                        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>

            <div className={'receiver'}>
                <div className={'messageContainerLeft'}>
                    <div className={'textMessage'}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>

            <div className={'receiver'}>
                <div className={'messageContainerLeft'}>
                    <div className={'textMessage'}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>

            <div className={'receiver'}>
                <div className={'messageContainerLeft'}>
                    <div className={'textMessage'}>
                        <span>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>

            <div className={'sender'}>
                <div className={'messageContainerRight'}>
                    <div className={'textMessage'}>
                        <span>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>


        </div>


    )
}


const mapStateToPropsForMessageList = (state) => ({
    messageList: state.messageList
})

export default connect(mapStateToPropsForMessageList)(Messages)