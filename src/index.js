import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import {createStore, applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Components/reducer/reducer'
import logger from 'redux-logger'
import {ToastProvider} from 'react-toast-notifications'

const store = createStore(
    Reducer,
    applyMiddleware(logger))

ReactDOM.render(
    <Provider store={store}>
        <ToastProvider placement="bottom-right">
            <App/>
        </ToastProvider>
    </Provider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
