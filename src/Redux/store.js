import { createStore, combineReducers, compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //promises

import ipcReducer from './dataToShow'

const rootReducer  = combineReducers({
    metrics: ipcReducer,
})

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store;
}