import React, {useContext, FC} from "react";
import CounterContext from "../contexts/CounterContext";


export default function Button(props: {}, state: {}) {
    const counterContext = useContext(CounterContext);

    return (
        <div>
            <h2>Button Click Counter</h2>
            <button onClick={counterContext.increment}>Click me!
            </button>
        </div>
    );
}