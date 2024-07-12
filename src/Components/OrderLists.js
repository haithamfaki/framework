import React, { useState } from 'react';
import './OrderLists.css';

const OrderLists = () => {
  const [requests, setRequests] = useState([
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john@example.com',
      orderDate: '2024-06-28',
      orderTime: '10:00 AM',
      phoneNumber: 'Lab Access',
      fullAddress: 'Math 101',
      orderDetails: 'Main Campus',
    },
    {
      id: 2,
      fullName: 'Jane Smith',
      email: 'jane@example.com',
      orderDate: '2024-06-29',
      orderTime: '2:00 PM',
      phoneNumber: 'Lab Access',
      fullAddress: 'Physics 201',
      orderDetails: 'West Campus',
    },
    {
      id: 3,
      fullName: 'Bilal Khamis Haji',
      email: 'bilalkhamis@gmail.com',
      orderDate: '2024-06-29',
      orderTime: '2:00 PM',
      phoneNumber: 'Lab Access',
      fullAddress: 'BITAM 2',
      orderDetails: 'Tunguu',
    }
  ]);

  const handleCancelRequest = (id) => {
    setRequests(requests.filter(order => order.id !== id));
  };

  const handleAcceptRequest = (id) => {
    // Handle accept request logic here
    console.log(`Order with id ${id} accepted`);
  };

  return (
    <div className="order-list-container">
      <h2>Order List</h2>
      <table>
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Order Date</th>
            <th>Order Time</th>
            <th>Phone Number</th>
            <th>Full Address</th>
            <th>Order Details</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(order => (
            <tr key={order.id}>
              <td>{order.fullName}</td>
              <td>{order.email}</td>
              <td>{order.orderDate}</td>
              <td>{order.orderTime}</td>
              <td>{order.phoneNumber}</td>
              <td>{order.fullAddress}</td>
              <td>{order.orderDetails}</td>
              <td>
                <button className='accept-button' onClick={() => handleAcceptRequest(order.id)}>Accept</button>
                <button className='cancel-button' onClick={() => handleCancelRequest(order.id)}>Cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderLists;
