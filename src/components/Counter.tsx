import React from "react";
import Button from "./Button";
import CounterInfo from "./CounterInfo";


export default function Counter(props: {}, state: {}) {

    return (
        <div>
            <Button/>
            <CounterInfo/>
        </div>
    );
}