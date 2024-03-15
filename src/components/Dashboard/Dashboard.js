import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="header">
                <h1>Welcome to the ERP System Dashboard</h1>
                <p>Efficiency and Simplicity Combined</p>
            </div>
            <div className="summary">
                <div className="metric">
                    <h2>Total Products</h2>
                    <p>120</p>
                </div>
                <div className="metric">
                    <h2>Total Orders</h2>
                    <p>85</p>
                </div>
                <div className="metric">
                    <h2>Pending Orders</h2>
                    <p>15</p>
                </div>
                <div className="metric">
                    <h2>Completed Orders</h2>
                    <p>70</p>
                </div>
            </div>
            <div className="navigation">
                <h2>Quick Navigation</h2>
                <Link to="/products" className="nav-link">Products Management</Link>
                <Link to="/orders" className="nav-link">Orders Management</Link>
            </div>
            <div className="copyright">
                <p>Copyright © 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Dashboard;
