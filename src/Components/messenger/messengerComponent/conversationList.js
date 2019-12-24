import React, {useEffect, useState} from "react";
import ConversationItem from "./ConversationItem";
import axios from 'axios'
import CustomiseInput from "../../Inputs/CustomiseInput";
import '../../../Css/conversation.css'

function ConversationList() {
    const [list, setList] = useState({
        searchList: [],
        conversationList: []
    })

    const [field, setField] = useState(undefined)

    const interval = setInterval(() => {
            if (field === undefined)
                getConversationList()
        }
        , 3000)


    function searchContacts(value, InputName) {

        setField(value)
        clearInterval(interval)

        if (value && value !== '') {

            let data = new FormData()
            data.append('token', window.localStorage.getItem('token'))
            data.append('query', value)
            data.append('size', 100)


            axios.post('http://click.7grid.ir/explore/search/contacts/', data)
                .then((response) => {
                    setList({
                        ...list,
                        searchList: response.data.data.users
                    })

                    clearInterval(interval)

                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setField(undefined)
            clearInterval(interval)
        }
    }

    function getConversationList() {
        console.log('hello')
        axios.get('http://click.7grid.ir/conversation/', {
            params: {
                token: window.localStorage.getItem('token')
            }
        })
            .then(function (response) {
                //console.log(response.data.data.conversation_details)

                setList({
                    ...list,
                    conversationList: response.data.data.conversation_details
                })

                clearInterval(interval)

            })
            .catch(function (error) {
                console.log(error);
            })
    }


    //load conversation list on start component
    useEffect(() => {

        if (field === undefined)
            getConversationList()
    }, [])

    return (

        <div className={'ConversationListContainer'}>
            <div className={'searchBoxContainer'}>
                <CustomiseInput
                    name={'searchField'}
                    type={'text'}
                    placeHolder={'Search'}
                    icon={'search'}
                    onChange={(value, InputName) => searchContacts(value, InputName)} //get dada and save it on state
                />
            </div>
            <div className={'ConversationItemContainer'}>
                {
                    field === undefined && list.conversationList.length !== 0 &&
                    list.conversationList.map((value) => {
                        if (field === undefined) {

                            /*get User info*/
                            let senderInfo = value.users.filter(user => user.id !== parseInt(window.localStorage.getItem('userId')))[0]
                            let unseenMessage = value.unseen_messages[window.localStorage.getItem('userId')]

                            return (

                                <ConversationItem
                                    key={senderInfo.id}
                                    id={senderInfo.id}
                                    email={senderInfo.email}
                                    unseenMessage={unseenMessage}
                                    image={senderInfo.avatar_url}
                                />

                            )
                        }

                    })
                }
                {
                    field !== undefined &&
                    list.searchList.map((value) => {
                            return (
                                <
                                    ConversationItem
                                    key={value.id}
                                    id={value.id}
                                    email={value.email}
                                    unseenMessage={''}
                                    image={value.avatar_url}
                                />

                            )
                        }
                    )
                }
            </div>
        </div>

    )
}

export default ConversationList