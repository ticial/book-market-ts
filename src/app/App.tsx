import React from "react";
import "../styles/App.css";
import { ContextProvider } from "../store/AppContext";
import Routing from "./Routing";

function App() {
    return (
        <ContextProvider>
            <Routing />
        </ContextProvider>
    );
}

export default App;
