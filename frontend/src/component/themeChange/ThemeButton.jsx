import { ThemeContext } from '../../context/ThemeContext'
import './themeButton.css'
import { useContext } from 'react'


const ThemeButton = () => {

    const { darkMode, toggleTheme } = useContext(ThemeContext)

    return (
        <>
            <div className="theme-container">
                <input type="checkbox" defaultChecked={darkMode} id="themeToggle" onClick={toggleTheme} />
                <label htmlFor="themeToggle"></label>
            </div>
        </>
    )
}

export default ThemeButton