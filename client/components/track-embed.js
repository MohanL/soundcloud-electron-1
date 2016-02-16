import React from 'react';

var TrackEmbed = React.createClass({

    render() {
        const { track } = this.props;
        const iframeUrl = `https://w.soundcloud.com/player/?auto_play=true&url=${encodeURIComponent(track.uri)}`;

        return (
            <div className="track-embed">
                <iframe frameBorder="no" height="100%" width="100%" scrolling="no" src={iframeUrl}></iframe>
            </div>
        );
    }

});

export default TrackEmbed;
