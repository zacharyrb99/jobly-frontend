import { useState, useEffect } from "react";

const useLocalStorage = (key, val = null) => {
    const initalVal = localStorage.getItem(key) || val;

    const [item, setItem] = useState(initalVal);

    useEffect(() => {
        if(item === null) {
            localStorage.removeItem(key);
        } else {
            localStorage.setItem(key, item);
        }
    }, [key, item])

    return [item, setItem]
}

export default useLocalStorage;