// @flow

import { createSelector } from 'reselect'
import { type FullState } from 'data/store'
import { type State as MetaState } from './reducer'

export const getMetaSlice = (state: FullState): MetaState => state.meta;

export const getSelectedAddress = createSelector(getMetaSlice, meta => {
    return meta.selectedAddress
})

export const getSoundStatus = createSelector(getMetaSlice, meta => {
    return meta.sound
})

export const getPrice = createSelector(getMetaSlice, meta => {
    return meta.price
})