const init = {
    TextData: {},
};

const MyReducer = (state = init, action) => {
    switch (action.type) {
        case 'Get_INPUT_DATA_FROM_TEXT':
            return {
                ...state,
                TextData: action.payload
            };
        case 'COMPUTE_RANDOM_CARD':
            return {
                ...state,
                TextData: action.payload
            };
        default:
            return state
    }
};

export default MyReducer