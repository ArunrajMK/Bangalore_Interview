import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducer";


const root = combineReducers({
    data:reducer
})


export const store = legacy_createStore(
root,
applyMiddleware(thunk)
)