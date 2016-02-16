import { handleActions } from 'redux-actions';
import { ACTION_SEARCH, ACTION_SEARCH_RESET, REQUEST_STATUS_LOAD, REQUEST_STATUS_SUCCESS, REQUEST_STATUS_FAIL } from '../constants.js';

const initialState = {
};

export default handleActions({

    ACTION_SEARCH (state, action) {
        const { payload , ...resetOfAction} = action;
        const {query = state.query, tracks, offset = state.offset, previousOffset = state.previousOffset, error, ...restOfPayload} = payload;
        return Object.assign({}, state, resetOfAction, restOfPayload, { query, tracks, offset, previousOffset, error });
    },

    ACTION_SEARCH_RESET (state, action) {
        return Object.assign({}, initialState, action);
    }

}, initialState)
