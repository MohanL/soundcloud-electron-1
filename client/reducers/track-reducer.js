import { handleActions } from 'redux-actions';
import { ACTION_TRACK_SET, ACTION_TRACK_EMBED } from '../actions/actions.js';

const initialState = {
};

export default handleActions({

    ACTION_TRACK_SET (state, action) {
        const { payload , ...resetOfAction} = action;
        return Object.assign({}, resetOfAction, payload);
    },

    ACTION_TRACK_EMBED (state, action) {
        return Object.assign({}, state, action, {embed: true});
    }

}, initialState)
