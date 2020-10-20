import initialState from './state'

const ADD_MESSAGE = 'ADD_MESSAGE';
const EDIT_MESSAGE = 'EDIT_MESSAGE';
const CHANGE_STATUS = 'CHANGE_STATUS';

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

function editMessage(text) {
    return {
        type: EDIT_MESSAGE,
        message
    }
}

function changeStatus(status) {
    return {
        type: CHANGE_STATUS,
        status
    }
}

function messages(state = initialState.messages, action) {
    switch(action.type) {
        case ADD_MESSAGE:
            return [...state.messages, action.message]
        case EDIT_MESSAGE:
            return state.messages.map(message => {
                if (message.id == action.message.id) {
                    return Object.assign({}, message, {text: action.message.text})
                }
            })
        default:
            return state
    }
}

function app(state = initialState, action) {
    switch (action.type) {
        case CHANGE_STATUS:
            return Object.assign({}, state, {status: action.status})
        default:
            return state
    }
  }
export default addTest