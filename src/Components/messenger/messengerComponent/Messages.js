import React from "react";
import {connect} from 'react-redux'
import {CreateConversation} from '../../action/action'
import '../../../Css/Messages.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDoubleDown} from "@fortawesome/free-solid-svg-icons";

function Messages(props) {
    return (
        <div className={'ContentContainer'}>

            <div className={'scroll'}>
                <a href={'#lastChild'}><FontAwesomeIcon icon={faAngleDoubleDown}/></a>
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
                        <span>LoremLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recentlyLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</span>
                    </div>
                    <div className={'messageTime'}>
                        <span>12:19</span>
                    </div>
                </div>
            </div>

            <div className={'sender'} id={'lastChild'}>
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