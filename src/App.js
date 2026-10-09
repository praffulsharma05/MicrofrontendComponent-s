import React from "react";
import "./styles/Sidebar.css";

const App = ({ isOpen, onClose }) => {
    return (
        <div className={`sidebar-backdrop ${isOpen ? 'open' : ''}`} onClick={onClose}>
            <div className="sidebar-container" onClick={(e) => e.stopPropagation()}>
                <div className="sidebar-header">
                    <h2>Cart Sidebar (mfs2)</h2>
                    <button className="close-btn" onClick={onClose} aria-label="Close" title="Close">
                        &times;
                    </button>
                </div>
                <div className="sidebar-content">
                    <p style={{ color: '#555', lineHeight: '1.5' }}>
                        This sidebar is a micro-frontend injected from <b>mfs2</b>.
                    </p>
                    <button className="action-btn">Proceed to Checkout</button>
                    <button className="action-btn secondary">Apply Promo Code</button>
                    <button className="action-btn secondary" onClick={onClose}>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
}

export default App;