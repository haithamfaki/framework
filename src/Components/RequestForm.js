import React from 'react';
import './RequestForm.css';

const RequestForm = ({ onClose }) => {
  return (
    <div className="request-form-overlay">
      <div className="request-form-container">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Send Order</h2>
        <form>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" placeholder="Full Name" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" placeholder="Your Email" />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="orderDate">Order Date</label>
              <input type="date" id="orderDate" />
            </div>
            <div className="form-group">
              <label htmlFor="orderTime">Order Time</label>
              <input type="time" id="orderTime" />
            </div>
          </div>
          <div className="form-group-row">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="text" id="phoneNumber" placeholder="Phone Number" />
            </div>
            
          </div>
          <div className="form-group">
              <label htmlFor="campusName">Full Addres</label>
              <textarea id="fullAddress" placeholder="Your Full Address....."></textarea>
            </div>
          <div className="form-group">
            <label htmlFor="orderDetails">Order Details</label>
            <textarea id="orderDetails" placeholder="Your Order Details...."></textarea>
          </div>
          <div className="form-buttons">
            <button type="button" className="cancel-button" onClick={onClose}>Cancel</button>
            <button type="submit" className="submit-button">Submit Request</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RequestForm;
