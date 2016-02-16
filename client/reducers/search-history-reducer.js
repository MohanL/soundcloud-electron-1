import { handleActions } from 'redux-actions';
import config from '../config.js'
import { ACTION_SEARCH } from '../actions/actions.js';

const initialState = {
    history : []
};

export default handleActions({

    ACTION_SEARCH (state, action) {
        const { payload , ...resetOfAction} = action;
        const { query } = payload;
        let newHistory;
        if (query) {
            //put new query at the beginning and make sure to de-dupe it
            newHistory = [query].concat(state.history.filter((value) => value !== query)).slice(0, config.searchHistoryMaximumSize);

            return Object.assign({}, resetOfAction, {history: newHistory});
        }

        return state;
    }

}, initialState)
