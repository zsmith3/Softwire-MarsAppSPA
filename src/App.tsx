import React from 'react';
import './App.css';
import NasaInfo from "./components/NasaInfo";
import ButtonCounter from "./components/ButtonCounter";

function App() {
    return (
        <div className="App">
            <main>
                <NasaInfo/>
                <ButtonCounter/>
            </main>
        </div>
    );
}

export default App;
