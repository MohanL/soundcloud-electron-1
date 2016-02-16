export default store => next => action  => {
    next(action);

    try {
        const fullState = store.getState();
        const state = {
            viewMode: fullState.viewMode,
            searchHistory: fullState.searchHistory
        };

        localStorage.setItem('state', JSON.stringify(state));

        // this is pretty cool, you can actually store the entire state for the next visit
        //localStorage.setItem('state', JSON.stringify(fullState));

    } catch (e) {
        console.error('localStorage set error:', e)
    }
}