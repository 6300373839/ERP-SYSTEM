import React from 'react';
import './Order.css'; // Import the CSS file for styling

const Order = ({ order }) => {
  return (
    <div className="order-card">
      <div className="order-details">
        <h3 className="order-id">Order ID: {order.id}</h3>
        <p className="customer">Customer: {order.customer}</p>
        <p className="date">Date: {order.date}</p>
        <p className="status">Status: <span>{order.status}</span></p>
      </div>
      <div className="order-actions">
        <button className="edit-btn">Edit</button>
        <button className="delete-btn">Delete</button>
      </div>
    </div>
  );
};

export default Order;
