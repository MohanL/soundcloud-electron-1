import { createAction, handleAction, handleActions } from 'redux-actions';
import { search } from '../utils/sound-cloud-api.js';
import { ACTION_SEARCH, ACTION_SEARCH_RESET, ACTION_VIEW_MODE, ACTION_TRACK_SET, ACTION_TRACK_EMBED, ACTION_CONTAINER_SET,
    REQUEST_STATUS_LOAD, REQUEST_STATUS_SUCCESS, REQUEST_STATUS_FAIL } from '../constants.js';


export function searchRequest(query, offset) {

    return (dispatch, getState) => {
        dispatch(searchLoad(query, offset));

        return search(query, offset).then(
            (result) => dispatch(searchSuccess(result.tracks, result.offset, result.previousOffset)),
            (error) => dispatch(searchFail(error))
        );
    }

}

export const searchLoad = createAction(ACTION_SEARCH, (query, offset) => {return {status: REQUEST_STATUS_LOAD, query, offset}});
export const searchSuccess = createAction(ACTION_SEARCH, (tracks, offset, previousOffset) => {return {status: REQUEST_STATUS_SUCCESS, tracks, offset, previousOffset}});
export const searchFail = createAction(ACTION_SEARCH, (error) => {return {status: REQUEST_STATUS_FAIL, error}});

export const searchReset = createAction(ACTION_SEARCH_RESET);

export const viewModeSet = createAction(ACTION_VIEW_MODE);

export const trackSet = createAction(ACTION_TRACK_SET, (track) => ({track}));
export const trackEmbed = createAction(ACTION_TRACK_EMBED);

export const containerSet = createAction(ACTION_CONTAINER_SET);