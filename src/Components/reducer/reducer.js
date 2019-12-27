const init = {
    userEmail: '',
    messageList: [],
    messagesFooter: '',
};

const MyReducer = (state = init, action) => {
    switch (action.type) {
        case 'SAVE_EMAIL':
            return {
                ...state,
                userEmail: action.payload
            };
        case 'CREATE_CONVERSATION':
            return {
                ...state,
                messageList: action.payload
            };
        case 'SEND_MESSAGE':
            return {
                ...state,
                messagesFooter: action.payload
            };
        default:
            return state
    }
};

export default MyReducer