import { type Dispatch as ReduxDispatch } from 'redux'

import {
    SET_SELECTED_ADDRESS,
    TOGGLE_SOUND,
    GET_EURO_PRICE_BEGIN,
    GET_EURO_PRICE_SUCCESS,
    GET_EURO_PRICE_FAIL
} from './constants'

type Action = {
    type: string,
    paylost?: Object | string | number
}

export const setSelectedAddress = (address: string): Action => {
    return {
        type: SET_SELECTED_ADDRESS,
        payload: address
    }
}

export const toggleSound = (): Action => {
    return {
        type: TOGGLE_SOUND
    }
}

export const getEuroPriceBegin = (): Actions => {
    return {
        type: GET_EURO_PRICE_BEGIN
    }
}
export const getEuroPriceFail = (): Actions => {
    return {
        type: GET_EURO_PRICE_FAIL
    }
}
export const getEuroPriceSuccess = (data: Object): Actions => {
    return {
        type: GET_EURO_PRICE_SUCCESS,
        payload: data
    }
}

export const loadEuroPrice = (): Function => {
    return (dispatch: ReduxDispatch) => {
        dispatch(getEuroPriceBegin())

        fetch("https://api.coinmarketcap.com/v2/ticker/1831/?convert=EUR")
            .then(response => response.text())
            .then(text => JSON.parse(text))
            .then(json => dispatch(getEuroPriceSuccess(json.data)))
            .catch(e => {
                console.error(e)
                dispatch(getEuroPriceFail())
            })
    }
}