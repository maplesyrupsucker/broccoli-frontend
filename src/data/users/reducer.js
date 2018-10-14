import {
    GET_USERS_BEGIN,
    GET_USERS_FAILED,
    GET_USERS_SUCCESS
} from './constants'

export const initialState: State = {
    users: []

}

const getUsersBegin = (state: State): State => {
    return { ...state, fetching: 1 }
}
const getUsersFailed = (state: State): State => {
    return { ...state, fetching: 0 }
}
const getUsersSuccess = (state: State, payload): State => {
    const users = payload
    const data = Object.keys(users).reduce((prev, curr, index) => {
        if (curr === 'id' || curr === 'content') return prev
        return [
            ...prev,
            {
                id: curr,
                last_name: users[curr][0],
                first_name: users[curr][1],
                amount_usd: users[curr][2],
                address: users[curr][3]
            }]
    }, [])
    return { ...state, fetching: 2, users: data }
}

const users = (state: State = initialState, action: Object): State => {
    switch (action.type) {
        case GET_USERS_BEGIN:
            return getUsersBegin(state);
        case GET_USERS_FAILED:
            return getUsersFailed(state);
        case GET_USERS_SUCCESS:
            return getUsersSuccess(state, action.payload)
        default:
            return state
    }
}

export default users