import React from "react";
import Sidebar from "./components/Sidebar";

const App = ({ isOpen, onClose, customText }) => {
    return (
        <Sidebar isOpen={isOpen} onClose={onClose} customText={customText} />
    );
}

export default App;