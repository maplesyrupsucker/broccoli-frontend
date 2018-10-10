import { combineReducers, createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import meta from './meta/reducer'

const logger = () => {
    return next => action => {
        if (process.env.NODE_ENV === 'development') {
            console.log('DISPATCH ::', action.type)
        }
        return next(action)
    }
}

const middleware = [
    thunk,
    logger
]

const rootReducer = combineReducers({
    meta
})

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['meta']
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(...middleware))
)

const persistor = persistStore(store)

export { persistor };
export default store