// @flow

import {
    SET_SELECTED_ADDRESS,
    TOGGLE_SOUND,
    GET_EURO_PRICE_BEGIN,
    GET_EURO_PRICE_SUCCESS,
    GET_EURO_PRICE_FAIL
} from './constants'

export type State = {
    selectedAddress: string,
    sound: boolean
}

export const initialState: State = {
    selectedAddress: '',
    sound: true
}

const setSelectedAddress = (state: State, address: string): State => {
    const { selectedAddress } = state;
    if (selectedAddress === address) return { ...state };
    return { ...state, selectedAddress: address }
}


const toggleSound = (state: State): State => {
    return { ...state, sound: !state.sound }
}

const getEuroPriceBegin = (state: State): State => {
    return { ...state, fetching: 1 }
}

const getEuroPriceFail = (state: State): State => {
    return { ...state, fetching: 0 }
}

const getEuroPriceSuccess = (state: State, data: Object): State => {
    const price = data.quotes.USD.price
    return { ...state, price, fetching: 2 }
}

const meta = (state: State = initialState, action: Object): State => {
    switch (action.type) {
        case SET_SELECTED_ADDRESS:
            return setSelectedAddress(state, action.payload);
        case TOGGLE_SOUND:
            return toggleSound(state);
        case GET_EURO_PRICE_BEGIN:
            return getEuroPriceBegin(state, action.payload);
        case GET_EURO_PRICE_FAIL:
            return getEuroPriceFail(state, action.payload);
        case GET_EURO_PRICE_SUCCESS:
            return getEuroPriceSuccess(state, action.payload);
        default:
            return state
    }
}

export default meta