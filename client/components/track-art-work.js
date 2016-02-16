import React from 'react';

var TrackArtWork = React.createClass({

    render() {
        const { track } = this.props;
        const fallbackImage = 'https://placeholdit.imgix.net/~text?txtsize=33&txt=no image&w=300&h=300';
        return (
            <div className="track-art-work" onClick={this._handleClick}>
                <div>{track.title}</div>
                <img src={(track.artwork_url||fallbackImage).replace(/large/, 't300x300')} alt={track.title} />
            </div>
        );
    },

    _handleClick() {
        this.props.clickCallback && this.props.clickCallback();
    }

});

export default TrackArtWork;
