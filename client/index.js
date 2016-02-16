import { Router, Route, browserHistory, createMemoryHistory, useRoutes } from 'react-router';
//import { createLocation, createMemoryHistory } from 'history'
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import config from './config.js';
import RootContainer from './containers/root-container.js';
import configureStore from './store/configure-store';
import styles from './styles.js';
let initialState = {};

try {
    initialState = JSON.parse(localStorage.getItem('state')) || {};
} catch (e) {
    console.error('localStorage get error:', e)
}

const store = configureStore(initialState);

SC.initialize({
    client_id: config.soundCloudClientId
});
let routes = <Route path="/" component={RootContainer}></Route>;
const history = createMemoryHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            {routes}
        </Router>
    </Provider>,
    document.getElementById('root')
);
