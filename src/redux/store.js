import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import authReducer from './authReducer.js'
import flatReducer from './flatReducer.js'


let rootReducers = combineReducers({
    authReducer,
    flatReducer
})

const store = createStore(rootReducers, applyMiddleware(thunk))

export default store;