import {
    LOGIN_BEGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from './constants'


export const initialState: State = {
    loggedIn: false
}


const loginBegin = (state: State): State => {
    return { ...state, fetching: 1 }
}

const loginFailed = (state: State): State => {
    return { ...state, fetching: 0 }
}

const loginSuccess = (state: State, data: Object): State => {

    return { ...state, data, fetching: 2 }
}

const meta = (state: State = initialState, action: Object): State => {
    switch (action.type) {
        case LOGIN_BEGIN:
            return loginBegin(state);
        case LOGIN_FAILED:
            return loginFailed(state);
        case LOGIN_SUCCESS:
            return loginSuccess(state, action.payload)
        default:
            return state
    }
}

export default meta