import {applyMiddleware, combineReducers, createStore} from "redux";
import logger from 'redux-logger'

import {usersReducer} from "./users-reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    subscribers: usersReducer
});

export type IGlobalState = ReturnType<typeof rootReducer>;

let middleware = [thunk];


if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    middleware = [thunk, logger]
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));
