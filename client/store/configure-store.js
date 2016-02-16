import { createStore, applyMiddleware } from 'redux';
import { syncHistory } from 'redux-simple-router';
import thunk from 'redux-thunk';
//import { browserHistory } from 'react-router';
import logger from '../middleware/logger.js';
import storage from '../middleware/storage.js';
import rootReducer from '../reducers/root-reducer.js';

export default function configureStore(initialState) {

    const create = window.devToolsExtension ? window.devToolsExtension()(createStore) : createStore;

    const createStoreWithMiddleware = applyMiddleware(
        thunk,
        storage
        //logger,
        //syncHistory(browserHistory)
    )(create);

    const store = createStoreWithMiddleware(rootReducer, initialState);

    if (module.hot) {
        module.hot.accept('../reducers/root-reducer.js', () => {
            const nextReducer = require('../reducers/root-reducer.js');
            store.replaceReducer(nextReducer);
        })
    }

    return store;
}