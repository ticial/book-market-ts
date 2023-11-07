import React from "react";
import "../styles/App.css";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import { ContextProvider } from "../store/AppContext";

function App() {
    return (
        <ContextProvider>
            <RouterProvider router={router} />
        </ContextProvider>
    );
}

export default App;
