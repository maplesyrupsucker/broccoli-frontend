import { type Dispatch as ReduxDispatch } from 'redux'

import {
    LOGIN_BEGIN,
    LOGIN_FAILED,
    LOGIN_SUCCESS
} from './constants'



export const loginBegin = () => {
    return {
        type: LOGIN_BEGIN
    }
}
export const loginFailed = () => {
    return {
        type: LOGIN_FAILED
    }
}
export const getEuroPriceSuccess = (data: Object) => {
    return {
        type: LOGIN_SUCCESS,
        payload: data
    }
}

export const login = (username, password): Function => {
    return (dispatch: ReduxDispatch) => {
        dispatch(getEuroPriceBegin())

        // post request to login

        
        /* fetch("https://api.coinmarketcap.com/v2/ticker/1831/?convert=EUR")
            .then(response => response.text())
            .then(text => JSON.parse(text))
            .then(json => dispatch(getEuroPriceSuccess(json.data)))
            .catch(e => {
                console.error(e)
                dispatch(getEuroPriceFail())
            }) */
    }
}