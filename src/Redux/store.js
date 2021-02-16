import { createStore, combineReducers, compose , applyMiddleware } from 'redux'
import thunk from 'redux-thunk' //promises

//Reducer
import ipcReducer from './dataToShow'
import setStation from './dataToUpdate'
import sendDataBase from './sendToDb'
import getDataBase from './getDataDb'


const rootReducer  = combineReducers({
    metrics: ipcReducer,
    station: setStation,
    sendata: sendDataBase,
    getDataBase: getDataBase
})

//code to setup redux dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export default function generateStore(){
    const store = createStore(rootReducer, composeEnhancers( applyMiddleware(thunk) ))
    return store;
}