import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './containers/AppContainer.js';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import thunk from 'redux-thunk';
import initialState from './initial-state';
import { startListeningToAuth } from './actions/auth';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import reducer from './reducers/index.js';

const middleware = [ thunk ];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
        applyMiddleware(...middleware),
        ...enhancers
    )
);

store.dispatch(startListeningToAuth());

ReactDOM.render(<Provider store={store}>
    <Router>
        <Route path='/' component={AppContainer}>
        </Route>
    </Router>
</Provider>, document.getElementById('root'));
registerServiceWorker();
