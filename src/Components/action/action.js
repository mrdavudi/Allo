export const SaveEmail = (email) => ({
    type: 'SAVE_EMAIL',
    payload: email
})
export const CreateConversation = (messageList) => ({
    type: 'CREATE_CONVERSATION',
    payload: messageList
})

