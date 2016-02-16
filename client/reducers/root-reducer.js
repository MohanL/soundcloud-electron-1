import { routeReducer as routing } from 'redux-simple-router';
import { combineReducers } from 'redux';
import searchReducer from './search-reducer.js';
import searchHistoryReducer from './search-history-reducer.js';
import viewModeReducer from './view-mode-reducer.js';
import trackReducer from './track-reducer.js';
import containerReducer from './container-reducer.js';

export default combineReducers({
    routing,
    search: searchReducer,
    searchHistory: searchHistoryReducer,
    viewMode: viewModeReducer,
    track: trackReducer,
    container: containerReducer
});
