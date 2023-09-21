function useDebounce(cb, delay = 1000) {
    let timerId;
    return (...args) => {
        clearTimeout(timerId);
        console.log(...args);
        timerId = setTimeout(() => {
            cb(...args);
        }, delay)
    }
}

export default useDebounce;