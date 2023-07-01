import { ThemeContext } from '../../context/ThemeContext'
import './themeButton.css'
import { useContext } from 'react'


const ThemeButton = () => {

    const { darkMode, setDarkMode } = useContext(ThemeContext)

    return (
        <>
            <div className="theme-container">
                <input type="checkbox" defaultChecked={darkMode} id="themeToggle" onClick={(e) => setDarkMode(e.target.checked)} />
                <label htmlFor="themeToggle"></label>
            </div>
        </>
    )
}

export default ThemeButton