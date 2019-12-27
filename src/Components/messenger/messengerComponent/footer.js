import React, {useState} from 'react';
import '../../../Css/footer.css'
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSmile} from "@fortawesome/free-regular-svg-icons";

import {connect} from 'react-redux'
import {sendMessage} from '../../action/action'

import {useToasts} from 'react-toast-notifications'
import axios from "axios";

import Picker from 'emoji-picker-react';

const useStyles = makeStyles(theme => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 'inherit',
        height: '6vh',
        borderRadius: '0 0 5px 0',
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

function Footer(props) {

    const [chosenEmoji, setChosenEmoji] = useState(null);

    const {addToast, removeAllToasts} = useToasts()

    const classes = useStyles();


    const [field, setField] = useState([])

    const onEmojiClick = (event, emojiObject) => {
        setChosenEmoji(emojiObject);
    }


    function getDataFromCustomiseInput(value) {
        setField(value)
    }


    //send message to server
    function send() {
        let data = new FormData()
        data.append('token', window.localStorage.getItem('token'))
        data.append('conversation_id', window.localStorage.getItem('conversationId'))
        data.append('text', field)

        axios.post('http://click.7grid.ir/conversation/create/', data)
            .then(function (response) {

            })
            .catch(function (error) {
                removeAllToasts()
                addToast('Please try again!', {
                    appearance: 'info',
                    autoDismiss: true,
                })
            });
    }

    //send message to redux and call send function to send message to server
    function sendMessageFunction() {
        if (field !== '' || chosenEmoji) {
            props.dispatch(sendMessage(field))
            send()
            setField('')
        } else {
            removeAllToasts()
            addToast('Enter at least a character!', {
                appearance: 'info',
                autoDismiss: true,
            })
        }
    }

    return (
        <div className={'footerContainer'}>

            <div className={'sticker'} id={'sticker'}
                 onMouseLeave={() => document.getElementById('sticker').style.visibility = 'hidden'}>
                <Picker onEmojiClick={onEmojiClick}/>
                {
                    //console.log('Emoji:::', chosenEmoji)
                    () => chosenEmoji &&
                        //setField(chosenEmoji.emoji)
                        //console.log('Emoji:::', chosenEmoji.emoji) &&
                        setField(chosenEmoji.emoji) &&
                        console.log('Field::::', field)
                }

            </div>

            <Paper component="form" className={classes.root}>
                <IconButton
                    className={classes.iconButton}
                    aria-label="menu"
                    onClick={() => document.getElementById('sticker').style.visibility = 'visible'}
                >

                    <FontAwesomeIcon icon={faSmile} style={{borderBlockColor: '#fff'}}/>
                </IconButton>
                <InputBase
                    autoFocus
                    className={classes.input}
                    placeholder="Type a message..."
                    inputProps={{'aria-label': 'Type a message...'}}
                    value={field}
                    onChange={(event) => getDataFromCustomiseInput(event.target.value)}
                />

                <Divider className={classes.divider} orientation="vertical"/>
                <IconButton onClick={() => sendMessageFunction()} color="primary"
                            className={classes.iconButton} aria-label="directions">
                    <img
                        alt={'Send'}
                        src={require('../../../image/sendIcon.svg')}
                        className={'sendIcon'}
                    />

                </IconButton>
            </Paper>
        </div>
    )
}

const mapDispatchToPropsForSendMessage = (dispatch) => ({
    dispatch: dispatch
})

export default connect(mapDispatchToPropsForSendMessage)(Footer)