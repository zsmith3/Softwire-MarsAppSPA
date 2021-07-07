import React from 'react';
import './App.css';
import {CounterProvider} from "./contexts/CounterContext";
import Counter from "./components/Counter";


function App() {

    return (
        <div className="App">
            <main>
                <CounterProvider>
                    <Counter/>
                </CounterProvider>
            </main>
        </div>
    );
}

export default App;
