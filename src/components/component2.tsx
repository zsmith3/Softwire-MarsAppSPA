import React, {useState} from "react";


export default function Component2 (props: {}, state: {}) {


    return <div>
        <h2>Button Click Counter</h2>
        <button onClick={() => updateCount(clickCount, setClickCount)}>Click me!</button>
    </div>;
}

