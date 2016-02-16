import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { trackEmbed } from '../actions/actions.js';
import TrackArtWork from '../components/track-art-work.js';
import TrackEmbed from '../components/track-embed.js';
import { CONTAINER_TRACK } from '../constants.js';

var TrackContainer = React.createClass({

    render() {
        const { track, embed, container, dispatch } = this.props;

        if (!track) {
            return <div className="track-container"></div>;
        }

        return (
            <div className={classNames('track-container', {active: container === CONTAINER_TRACK})}>
                { track && <TrackArtWork track={track} clickCallback={()=>dispatch(trackEmbed())}/> }
                { track && embed && <TrackEmbed track={track} /> }
            </div>
        );
    }

});

function mapStateToProps(state) {
    return {
        track: state.track.track,
        embed: state.track.embed,
        container: state.container.container
    }
}

export default connect(mapStateToProps)(TrackContainer);