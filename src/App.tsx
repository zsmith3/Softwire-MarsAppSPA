import React from 'react';
import './App.scss';
import NasaInfo from "./components/NasaInfo";
import ButtonCounter from "./components/ButtonCounter";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./components/HomePage";
import NavBar from "./components/NavBar/NavBar";
import {CounterProvider} from "./contexts/CounterContext";
import Counter from "./components/Counter";

export default function App() {
    return (
        <BrowserRouter>
            <header className="AppHeader">
                <NavBar />
            </header>
            <main className="App">
                <Switch>
                    <Route path="/nasa">
                        <NasaInfo/>
                    </Route>
                    <Route path="/counter">
                        <ButtonCounter/>
                    </Route>
                    <Route path="/counter2">
                        <CounterProvider>
                            <Counter/>
                        </CounterProvider>
                    </Route>
                    <Route path="/">
                        <HomePage />
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}
