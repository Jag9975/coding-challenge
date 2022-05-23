import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inventory from "./components/inventory.js";
import "./App.css";


function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route exact path="/" element={<Inventory />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;