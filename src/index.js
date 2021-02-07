import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
//Metricas de la aplicación
import reportWebVitals from './reportWebVitals';

//Redux
import { Provider } from 'react-redux'
import generateStore from './Redux/store'
import { getDataAction } from './Redux/dataToShow'
import createHistory  from 'history/createBrowserHistory'; //control de rutas
import thunk from 'redux-thunk'; // Promise
import { routerMiddleware } from  'react-router-redux'; // Middleware

const history = createHistory();
const middleware = [ routerMiddleware(history), thunk ] //Se le esta pasando dos middleware

//Load Store
const store = generateStore()
//Load data initial
store.dispatch(getDataAction())

ReactDOM.render(
    <Provider store={ store }>
      <App history={ history }/>
    </Provider>,
    document.getElementById('root')
  );
  
  // If you want to start measuring performance in your app, pass a function
  // to log results (for example: reportWebVitals(console.log))
  // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  reportWebVitals();
