import {applyMiddleware, combineReducers, createStore} from "redux";

import {usersReducer} from "./users-reducer";
import thunk from 'redux-thunk';

const rootReducer = combineReducers({
    subscribers: usersReducer
});

export type IGlobalState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, applyMiddleware(thunk));

if (process.env.NODE_ENV === 'development') {
    // @ts-ignore
    window.store = store;
}