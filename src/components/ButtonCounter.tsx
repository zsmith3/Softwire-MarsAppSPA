import React, {useEffect, useState} from "react";

function updateCount(clickCount: number, setClickCount: (newCount: number) => void) {
    window.localStorage.setItem("clickCount", (clickCount + 1).toString());
    setClickCount(clickCount + 1);
}

export default function ButtonCounter (props: {}, state: { clickCount: number }) {
    const [clickCount, setClickCount] = useState(parseInt(window.localStorage.getItem("clickCount") || '0'));

    useEffect(() => {
        document.title = "Button Click Counter";
    });

    return <div>
        <h2>Button Click Counter</h2>
        <button onClick={() => updateCount(clickCount, setClickCount)}>Click me!</button>
        <p>The button has been clicked {clickCount} times.</p>
    </div>;
}
