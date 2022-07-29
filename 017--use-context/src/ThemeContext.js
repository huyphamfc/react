import { useState, createContext } from 'react';


export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const themeHandler = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{ theme, themeHandler }}>
            {children}
        </ThemeContext.Provider>
    );
}