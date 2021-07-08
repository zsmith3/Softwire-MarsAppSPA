import React from "react";
import Counter from "./Counter";
import {CounterProvider} from "../../contexts/CounterContext";

export default function ButtonCounterV2() {
    return <div>
        <h3>Button Click Counter (using context)</h3>
        <CounterProvider>
            <Counter/>
        </CounterProvider>
    </div>;
}
