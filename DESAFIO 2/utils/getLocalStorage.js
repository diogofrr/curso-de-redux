const getLocalStorage = (key, initialValue) => {
    try {
        return JSON.parse(localStorage.getItem(key));
    } catch (error) {
        return initialValue;
    }
};

export default getLocalStorage;