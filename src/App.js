import React from "react";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = ({ isOpen = true, onClose = () => { }, customText = "Running in standalone mode" }) => {
    return (
        <div className="app-standalone-container">
            <h1>Welcome to Micro-Frontend 2 (Standalone)</h1>
            <p>The Sidebar component is currently active.</p>
            <Sidebar isOpen={isOpen} onClose={onClose} customText={customText} />
        </div>
    );
}

export default App;