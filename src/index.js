import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './assets/css/index.css'
import cartReducer from './reducers/cartReducer';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from "redux-thunk"
import logger from 'redux-logger'

const store = createStore(cartReducer, applyMiddleware(logger, reduxThunk));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));