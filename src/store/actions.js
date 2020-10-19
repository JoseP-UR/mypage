import initialState from './state'

const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_STATUS = 'CHANGE_STATUS';

function addMessage(message) {
    return {
        type: ADD_MESSAGE,
        message
    }
}

function changeStatus(status) {
    return {
        type: CHANGE_STATUS,
        status
    }
}


function testApp(state = initialState, action) {
    switch (action.type) {
        case ADD_MESSAGE:
            return [...state.messages, action.message]
        default:
            return state
    }
  }
export default addTest