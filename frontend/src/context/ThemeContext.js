import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext(null)


export const ThemeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    )
}