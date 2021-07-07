import React from 'react';
import './App.css';
import NasaInfo from "./components/NasaInfo";
import ButtonCounter from "./components/ButtonCounter";
import {BrowserRouter, Switch, Route, Link} from "react-router-dom";

export default function App() {
    return (
        <BrowserRouter>
            <header>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/nasa">NASA</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                    </ul>
                </div>
            </header>

            <main className="App">
                <Switch>
                    <Route path="/nasa">
                        <NasaInfo/>
                    </Route>
                    <Route path="/counter">
                        <ButtonCounter/>
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}
