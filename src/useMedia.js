import React from "react";

export default function useMedia(queries, values, defaultValue) {

    const [value, setValue] = React.useState(defaultValue);

    const mediaQueryLists = queries.map(q => window.matchMedia(q));

    const getValue = () => {
        const index = mediaQueryLists.findIndex(mql => mql.matches);

        return typeof values[index] !== 'undefined' ? values[index] : defaultValue;
    };

    React.useEffect(() => {
        setValue(getValue);

        const handler = () => setValue(getValue);

        mediaQueryLists.forEach(mql => mql.removeListener(handler));
    }, []);
 return value;   
}