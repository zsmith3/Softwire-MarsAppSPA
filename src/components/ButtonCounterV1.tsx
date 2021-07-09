import React, {useEffect, useState} from "react";

function updateCount(clickCount: number, setClickCount: (newCount: number) => void) {
    window.localStorage.setItem("clickCount", (clickCount + 1).toString());
    setClickCount(clickCount + 1);
}

export default function ButtonCounterV1 (props: {}, state: { clickCount: number }) {
    const [clickCount, setClickCount] = useState(parseInt(window.localStorage.getItem("clickCount") || '0'));

    return <div>
        <h3>Button Click Counter (single component, persistent)</h3>
        <button className="button" onClick={() => updateCount(clickCount, setClickCount)}>Click me!</button>
        <p>The button has been clicked {clickCount} times.</p>
    </div>;
}
