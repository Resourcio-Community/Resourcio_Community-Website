import { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()


export const ThemeContextProvider = ({ children }) => {

    const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem('darkMode')) || false)

    const r = document.documentElement

    const updateTheme = () => {
        if (!darkMode) {
            document.body.style.background = ''
            document.body.style.color = ''
            r.style.setProperty('--eerie-black-1', '')
            r.style.setProperty('--white', '')
        }
        else {
            document.body.style.background = '#151515'
            document.body.style.color = 'white'
            r.style.setProperty('--eerie-black-1', 'white')
            r.style.setProperty('--white', 'black')
        }
    }

    const toggleTheme = () => {
        setDarkMode(!darkMode)
    }

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode)
        updateTheme()
    }, [darkMode])

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}