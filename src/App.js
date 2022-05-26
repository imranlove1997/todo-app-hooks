import React from 'react';
import Todo from "./Todo";
import Toggle from './Toggle';
import useDarkMode from './useDarkMode';
import './style.scss';

export default function App() {
    const [darkMode, setDarkMode ] = useDarkMode();

    return (
        <>
        <div>
            <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
        </div>
        <Todo />
        </>
    )
}