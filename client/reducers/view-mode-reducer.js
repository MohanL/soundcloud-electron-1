import { handleActions } from 'redux-actions';
import { ACTION_VIEW_MODE, VIEW_MODE_LIST } from '../constants.js';

const initialState = {
    viewMode : VIEW_MODE_LIST
};

export default handleActions({

    ACTION_VIEW_MODE (state, action) {
        const { payload , ...resetOfAction} = action;
        return Object.assign({}, state, resetOfAction, {viewMode: payload});
    }

}, initialState)
