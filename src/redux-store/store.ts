import { combineReducers, legacy_createStore as createStore} from 'redux'
import { Store } from 'redux'

let combinedReducers=combineReducers({

})


export type Rootstate=ReturnType<typeof combinedReducers>

export const store:Store<Rootstate>=createStore(combinedReducers)

export const dispatch=store.dispatch