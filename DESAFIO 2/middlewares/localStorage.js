const localStorage = store => next => action => {
    if(action.localStorage !== undefined) {
        window.localStorage.setItem(
            action.localStorage,
            JSON.stringify(action.payload)
        );
    }

    return next(action);
};

export default localStorage;