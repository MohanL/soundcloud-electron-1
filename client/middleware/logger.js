export default store => next => action  => {
    console.log('before action',  action, store.getState());
    next(action);
    console.log('after action',  action, store.getState());
}