import React, {useEffect, useState} from "react";
import ConversationItem from "./ConversationItem";
import axios from 'axios'
import CustomiseInput from "../../Inputs/CustomiseInput";
import '../../../Css/conversation.css'

/*const conversations = [
    {
        id: 1,
        name: 'ali',
        latest_message: 'Have a good time have a good time',
        unseen: 500,
        image: 'https://www.6sigma.us/wp-content/uploads/2017/05/bill-gates-jpg-768x516.jpg',
        email: 'ali123@gmail.com',
    },
    {
        id: 2,
        name: 'reza',
        latest_message: 'goodby',
        unseen: 5,
        image: 'https://cdn2.hubspot.net/hubfs/1716276/API/celebrities/steve_jobs.jpg',
        email: 'reza123@gmail.com',
    }
]*/

function ConversationList() {

    /* state for TextFields */
    const [field, setField] = useState({
        email: '',
        password: ''
    });

    function getDataFromCustomiseInput(value, InputName) {
        setField({...field, [InputName]: value})
    }

    const interval = setInterval(getConversationList, 3000)

    function getConversationList() {
        console.log('hello')
        axios.get('http://click.7grid.ir/conversation/', {
            params: {
                token: window.localStorage.getItem('token')
            }
        })
            .then(function (response) {
                setConversationList(response.data.data.conversation_details)
                clearInterval(interval)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    const [conversationList, setConversationList] = useState([])


    useEffect(()=>{
        getConversationList()
    },[])

    return (
        <div className={'ConversationListContainer'}>
            <div className={'searchBoxContainer'}>
                <div className={'searchInput'}>
                    <CustomiseInput
                        name={'search'}
                        type={'text'}
                        placeHolder={'Search'}
                        icon={'search'}
                        onChange={(value, InputName) => getDataFromCustomiseInput(value, InputName)} //get dada and save it on state
                    />
                </div>
            </div>
            <div className={'ConversationItemContainer'}>
                {
                    conversationList.map((value) => {

                        /*get User info*/
                        let senderInfo = value.users.filter(user => user.id !== parseInt(window.localStorage.getItem('userId')))[0]
                        let unseenMessage = value.unseen_messages[window.localStorage.getItem('userId')]

                        return (
                            <React.Fragment key={senderInfo.id}>
                                <ConversationItem
                                    key={senderInfo.id}
                                    id={senderInfo.id}
                                    email={senderInfo.email}
                                    unseenMessage={unseenMessage}
                                    image={senderInfo.avatar_url}
                                />
                            </React.Fragment>
                        )
                    })

                }
            </div>
        </div>
    )
}

export default ConversationList