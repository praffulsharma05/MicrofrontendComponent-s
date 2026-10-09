import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = ({ isOpen, onClose, customText }) => {
    const [banks, setBanks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isOpen && banks.length === 0) {
            setLoading(true);
            fetch("https://landmaarkdeveloper.com/api/banks")
                .then(res => res.json())
                .then(data => {
                    setBanks(data);
                    setLoading(false);
                })
                .catch(err => {
                    console.error("Error fetching banks:", err);
                    setLoading(false);
                });
        }
    }, [isOpen, banks.length]);

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
                    <p className="sidebar-description">
                        This sidebar is a micro-frontend injected from <b>mfs2</b>.
                    </p>

                    {customText && (
                        <div className="custom-message-box">
                            <strong className="custom-message-title">Message from Host:</strong> 
                            <p className="custom-message-text">{customText}</p>
                        </div>
                    )}

                    <div className="bank-selector">
                        <label htmlFor="bank-select">Select a Bank:</label>
                        <select id="bank-select" className="bank-dropdown" disabled={loading}>
                            <option value="">{loading ? "Loading banks..." : "-- Select a Bank --"}</option>
                            {banks.map((bank) => (
                                <option key={bank.id} value={bank.name}>
                                    {bank.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <button className="action-btn">Proceed to Checkout</button>
                    <button className="action-btn secondary">Apply Promo Code</button>
                    <button className="action-btn secondary" onClick={onClose}>Continue Shopping</button>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
