import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';
import Content from './Content';
import './App.css';


function App() {
    const themeHandler = useContext(ThemeContext).themeHandler;

    return (
        <>
            <Content />
            <button onClick={themeHandler} >Theme</button>
        </>
    );
}

export default App;