const getLocalStorage = (key, initial) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return initial;
    }
}

export default getLocalStorage;