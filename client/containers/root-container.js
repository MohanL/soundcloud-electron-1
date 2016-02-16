import React from 'react';
import { searchRequest } from '../actions/actions.js';
import SearchContainer from './search-container.js';
import TrackContainer from './track-container.js';
import SearchHistoryContainer from './search-history-container.js';

var RootContainer = React.createClass({

    render() {
        return <main className="root-container">
            <SearchContainer />
            <TrackContainer />
            <SearchHistoryContainer />
        </main>;
    }

});

export default RootContainer;
