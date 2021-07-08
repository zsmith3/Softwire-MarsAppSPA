import React, {useContext} from "react";
import CounterContext from "../../contexts/CounterContext";

export default function Button() {
    const counterContext = useContext(CounterContext);

    return (
        <div>
            <button onClick={counterContext.increment}>
                Click me!
            </button>
        </div>
    );
}
