import React from 'react';
import classNames from 'classnames';
import { REQUEST_STATUS_LOAD, REQUEST_STATUS_SUCCESS, VIEW_MODE_LIST, VIEW_MODE_TILES } from '../constants.js';

var SearchResults = React.createClass({

    render() {
        const { viewMode, tracks = [], status } = this.props;

        if (!status) {
            return <div className="search-results"></div>
        }

        if (status === REQUEST_STATUS_LOAD) {
            //todo replace with a spinner
            return <ul className="search-results"><li>loading...</li></ul>
        }

        if (status === REQUEST_STATUS_SUCCESS && !tracks.length) {
            return <ul className="search-results"><li>No tracks found.</li></ul>
        }

        return <ul className={classNames('search-results',{'search-results--tiles' : viewMode === VIEW_MODE_TILES})}>
            {tracks.map((track) => {
                return viewMode === VIEW_MODE_TILES ? this._tileItem(track) : this._listItem(track);
            })}
        </ul>;
    },

    _listItem(track) {
        return (
            <li key={track.id} onClick={() => this.props.trackClickCallback(track)}>
                {track.title}
            </li>
        );
    },

    _tileItem(track) {
        const fallbackImage = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=no image&w=100&h=100';
        return (
            <li key={track.id} onClick={() => this.props.trackClickCallback(track)}>
                <img src={track.artwork_url||fallbackImage} alt={track.title} />
                <div>{track.title}</div>
            </li>
        );
    }

});

export default SearchResults;
