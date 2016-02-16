import { handleActions } from 'redux-actions';
import { ACTION_CONTAINER_SET, ACTION_TRACK_SET, ACTION_SEARCH, ACTION_VIEW_MODE, CONTAINER_SEARCH, CONTAINER_TRACK } from '../constants.js';

const initialState = {
    container : CONTAINER_SEARCH
};

export default handleActions({

    ACTION_TRACK_SET (state, action) {
        return {container: CONTAINER_TRACK};
    },

    ACTION_SEARCH (state, action) {
        return {container: CONTAINER_SEARCH};
    },

    ACTION_VIEW_MODE (state, action) {
        return {container: CONTAINER_SEARCH};
    },

    ACTION_CONTAINER_SET (state, action) {
        const { payload , ...resetOfAction} = action;
        return {container: payload};
    }

}, initialState)
