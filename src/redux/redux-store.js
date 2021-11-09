import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import dataState from "./data-reducer";

const reducers = combineReducers({
    dataState: dataState
})

const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store