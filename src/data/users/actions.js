import { type Dispatch as ReduxDispatch } from 'redux'

import {
    GET_USERS_BEGIN,
    GET_USERS_FAILED,
    GET_USERS_SUCCESS
} from './constants'

import {
    BROCCOLI_USERS
} from '../api'


export const getUsersBegin = () => {
    return {
        type: GET_USERS_BEGIN
    }
}

export const getUsersFailed = () => {
    return {
        type: GET_USERS_FAILED
    }
}

export const getUsersSuccesss = (payload) => {
    return {
        type: GET_USERS_SUCCESS,
        payload
    }
}

export const getUsers = (): Function => {
    return (dispatch: ReduxDispatch) => {
        dispatch(getUsersBegin())

        fetch(BROCCOLI_USERS, {
            method: 'GET',

            headers: {
                'Content-Type': 'application/json'
            }

        })
            .then(res => {
                return res.json()
            })
            .then(json => {
                console.log(json)
                dispatch(getUsersSuccesss(json))
            })
            .catch(e => {
                console.log(e)
                dispatch(getUsersFailed())
            })
    }
}