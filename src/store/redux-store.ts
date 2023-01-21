import { applyMiddleware, combineReducers, Store } from "redux";
import { legacy_createStore as createStore} from 'redux'
import thunk from "redux-thunk";
import { tasksReducer } from "./tasksReduser";
import { toDoListReduser } from "./toDoListReduser";

let combinedReducers=combineReducers({
    toDoListReduser,
    tasksReducer,
})

export type RootState=ReturnType<typeof combinedReducers>

export let store:Store<RootState>=createStore(combinedReducers, applyMiddleware(thunk))