import React from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../actions/actions.js';

var SearchHistoryContainer = React.createClass({

    render() {
        const { dispatch, searchHistory} = this.props;
        const { history } = searchHistory;

        return (
            <div className="search-history-container">
                <h2>Recent Searches:</h2>
                <ul>
                {
                    history.map((query) => {
                        return <li key={query} onClick={() => dispatch(searchRequest(query))}>{query}</li>
                    })
                }
                </ul>
            </div>
        );
    }

});

function mapStateToProps(state) {
    return {
        searchHistory: state.searchHistory
    }
}

export default connect(mapStateToProps)(SearchHistoryContainer);