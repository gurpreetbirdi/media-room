import {
    STREAMING
} from '../actions';

const appStates = (state = {
    isStreaming: false
}, action) => {
    switch (action.type) {
        case STREAMING:
            return {...state,
                isStreaming: action.isStarted
            }
        default:
            return state
    }
}

export default appStates;