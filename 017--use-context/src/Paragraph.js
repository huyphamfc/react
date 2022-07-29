import { useContext } from 'react';
import { ThemeContext } from './App';


function Paragraph() {
    const theme = useContext(ThemeContext);

    return (
        <p className={theme}>
            React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.
        </p>
    );
}

export default Paragraph;