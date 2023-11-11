import React from "react";
import "../styles/App.css";
import { ContextProvider } from "../store/AppContext";
import Routing from "./Routing";
import { BrowserRouter } from "react-router-dom";

function App() {
    return (
        <ContextProvider>
            <BrowserRouter>
                <Routing />
            </BrowserRouter>
        </ContextProvider>
    );
}

export default App;
