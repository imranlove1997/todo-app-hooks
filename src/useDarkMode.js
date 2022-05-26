import React from 'react';
import useLocalStorage from './useLocalStorage';
import useMedia from './useMedia';

export default function useDarkMode() {
    const [ enabledState, setEnabledState] = useLocalStorage('dark-mode-enabled');

    const prefersDarkMode = usePrefersDarkMode();

    const enabled = typeof enabledState !== 'undefined' ? enabledState : prefersDarkMode;

    React.useEffect(() => {
        const className = 'dark-mode';
        const element = window.document.body;
        if(enabled) {
            element.classList.add(className);
        } else {
            element.classList.remove(className);
        }
    }, [enabled]);
    return [enabled, setEnabledState];
}

function usePrefersDarkMode() {
    return useMedia(['(prefers-color-schema: dark)'], [true], false);
}
