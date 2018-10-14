import { createSelector } from 'reselect'
import { type FullState } from '../store'
import { type State as MetaState } from './reducer'

export const getUsersState = (state: FullState): UserState => state.users

export const getUserList = createSelector(getUsersState, users => {
    return users.users
})