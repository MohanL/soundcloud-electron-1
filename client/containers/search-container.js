import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { searchRequest, searchReset, viewModeSet, trackSet, containerSet } from '../actions/actions.js';
import { CONTAINER_SEARCH, CONTAINER_TRACK } from '../constants.js';
import SearchInput from '../components/search-input.js';
import SearchResults from '../components/search-results.js';
import SearchFooter from '../components/search-footer.js';

var SearchContainer = React.createClass({

    render() {

        const { dispatch, viewMode, container } = this.props;
        const { tracks, offset, previousOffset, query, status } = this.props.search;

        const searchInputParams = {
            query,
            searchCallback: (query) => dispatch(searchRequest(query)),
            searchResetCallback: () => dispatch(searchReset()),
            focusCallback: () => dispatch(containerSet(CONTAINER_SEARCH))
        };

        const searchResultsParams = {
            tracks,
            status,
            viewMode,
            trackClickCallback: (track) => dispatch(trackSet(track))
        };

        const searchFooterParams = {
            nextPageCallback: offset ? () => dispatch(searchRequest(query, offset)) : null,
            previousPageCallback: Number.isInteger(previousOffset) ? () => dispatch(searchRequest(query, previousOffset)) : null,
            viewModeCallback : (viewMode) => dispatch(viewModeSet(viewMode)),
            viewMode
        };

        return (
            <div className={classNames('track-container', {active: container === CONTAINER_SEARCH})}>
                <SearchInput {...searchInputParams} />
                <SearchResults {...searchResultsParams} />
                <SearchFooter {...searchFooterParams} />
            </div>
        );
    }

});

function mapStateToProps(state) {

    return {
        search: state.search,
        viewMode: state.viewMode.viewMode,
        container: state.container.container
    }
}

export default connect(mapStateToProps)(SearchContainer);
