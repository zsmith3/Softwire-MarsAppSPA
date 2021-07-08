import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar/NavBar";
import MarsPhotos from "./components/MarsPhotos/MarsPhotos";
import CountersPage from "./pages/CountersPage";
import NasaInfoPage from "./pages/NasaInfoPage";
import ImagePage from "./components/ImageResults/ImagePage";

export default function App() {
    return (
        <BrowserRouter>
            <header className="AppHeader">
                <NavBar/>
            </header>
            <main className="App">
                <Switch>
                    <Route path="/nasa">
                        <NasaInfoPage/>
                    </Route>
                    <Route path="/counters">
                        <CountersPage/>
                    </Route>
                    <Route path="/mars">
                        <ImagePage />
                    </Route>
                    <Route path="/">
                        <HomePage/>
                    </Route>
                </Switch>
            </main>
        </BrowserRouter>
    );
}
