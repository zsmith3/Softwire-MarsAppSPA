import React from "react";
import Counter from "./Counter";
import {CounterProvider} from "../../contexts/CounterContext";

export default function ButtonCounterV2() {
    return <div>
        <h2>Button Click Counter (using context)</h2>
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    </div>;
}
