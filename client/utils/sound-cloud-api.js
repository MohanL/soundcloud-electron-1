import config from '../config.js';

function findOffset(url) {
    url = url || '';
    const match = url.match(/(&|\?)offset=(\d+)/);

    if (match && match.length === 3) {
        return parseInt(match[2], 10);
    }

    return null;
}

export function search(query, offset = 0) {
    return SC.get('/tracks', {
        q: query, limit: config.soundCloudPageSize, linked_partitioning: true, offset: offset
    }).then((result) => {

        const previousOffset = (offset - config.soundCloudPageSize) >= 0 ? (offset - config.soundCloudPageSize) : null;

        return {
            tracks : result.collection,
            offset: findOffset(result.next_href),
            previousOffset : previousOffset
        };
    });
}