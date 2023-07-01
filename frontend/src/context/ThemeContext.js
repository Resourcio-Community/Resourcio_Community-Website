import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext();


export const ThemeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

    const toggleTheme = ()=>{
        if(darkMode)
        {
            setDarkMode(false);
            console.log("DarkMode");
        }
        else
        {
            setDarkMode(true);
            console.log("Light mode");
        }
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}