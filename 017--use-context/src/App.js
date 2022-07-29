import { useState, createContext } from 'react';
import Content from './Content';
import './App.css';


export const ThemeContext = createContext();

function App() {
    const [theme, setTheme] = useState('light');

    const themeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={theme}>
            <Content />
            <button onClick={themeHandler} >Theme</button>
        </ThemeContext.Provider>
    );
}

export default App;