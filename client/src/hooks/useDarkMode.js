import { useState, useEffect } from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const useDarkMode = (bool) => {
    const [darkMode, setDarkMode] = useLocalStorage("darkmode", bool);
    const body = document.querySelector("body");

    useEffect(() => {
        if(darkMode){
            body.classList.remove("lightMode");
            body.classList.add("darkMode");
        } else {
            body.classList.remove("darkMode");
            body.classList.add("lightMode");
        }
    }, [darkMode]);

    return [darkMode, setDarkMode];
}

// darkMode ?
// body.classList.add("darkMode")
// body.classList.remove("lightMode"):
// body.classList.add("lightMode");