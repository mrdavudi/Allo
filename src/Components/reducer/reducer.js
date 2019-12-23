const init = {
    userEmail: '',
    messageList: [],
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
        default:
            return state
    }
};

export default MyReducer