import React from 'react';
import classNames from 'classnames';
import { VIEW_MODE_LIST, VIEW_MODE_TILES } from '../constants.js';

var SearchFooter = React.createClass({

    render() {
        const { previousPageCallback, nextPageCallback, tilesCallback, listCallback, viewMode } = this.props;

        return (
            <div className="search-footer">
                { previousPageCallback && <i className="fa fa-arrow-left previous-page" onClick={previousPageCallback} /> }
                { nextPageCallback && <i className="fa fa-arrow-right next-page" onClick={nextPageCallback} /> }
                <i className={classNames('fa', 'fa-th', 'tiles', {active: viewMode === VIEW_MODE_TILES})} onClick={() => this._handleViewMode(VIEW_MODE_TILES)} />
                <i className={classNames('fa', 'fa-list', 'list', {active: viewMode === VIEW_MODE_LIST})} onClick={() => this._handleViewMode(VIEW_MODE_LIST)} />
            </div>
        );
    },

    _handleViewMode(viewMode) {
        if (this.props.viewMode !== viewMode) {
            this.props.viewModeCallback(viewMode);
        }
    }

});

export default SearchFooter;
