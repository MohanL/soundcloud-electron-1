import React from 'react';

var SearchInput = React.createClass({

    componentWillReceiveProps(nextProps) {
        if (nextProps.query) {
            this.refs.searchInput.value = nextProps.query;
        }
    },

    render() {
        const { query } = this.props;

        return (
            <div className="search-input">
                <input type="text" placeholder="search" ref="searchInput" defaultValue={query} onKeyPress={this._handlePressEnter} onFocus={this.props.focusCallback}/>
                <button onClick={this._handleGo}>Go</button>
            </div>
        );
    },

    _handlePressEnter(e) {
        if (e.key.toLowerCase() === 'enter') {
            this._handleGo();
        }
    },

    _handleGo() {
        const { searchCallback, searchResetCallback } = this.props;
        const query = this.refs.searchInput.value;

        if (!query) {
            return searchResetCallback();
        }

        searchCallback(query);
    }



});

export default SearchInput;
