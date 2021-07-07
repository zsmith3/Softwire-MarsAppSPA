import React, {useContext} from "react";
import CounterContext from "../contexts/CounterContext";


export default function CounterValue (props: {}, state: {}) {
    const counterContext = useContext(CounterContext);
    const counterVal = counterContext.count
    return <div>
        <p>The button has been clicked {counterVal} times.</p>
    </div>;
}