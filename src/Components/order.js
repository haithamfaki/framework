import React, { useState } from 'react';
import { Button } from 'rsuite';
import { Link } from 'react-router-dom';
import RequestForm from './RequestForm';
import './order.css';

const Order = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOrderClick = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  return (
    <div>
      <header>
        <div className="logo">design  <span>welcome</span></div>
        <nav>
          <div className="login-button">
            <button><Link to="login" className='login-button'>Log In</Link></button>
          </div>
        </nav>
      </header>
      <main>
        <div className="products">
          <div className="product">
            <div className="image">
              <img src="P9.PNG" alt="Beautiful Tender Bouquet" />
              <span className="sale">Sale!</span>
            </div>
            <div className="info">
              <div className="categories">new</div>
              <div className="name">design</div>
              <div className="price">100000</div>
              <Button appearance="primary" onClick={handleOrderClick}>ORDER</Button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="P8.PNG" alt="Cotton Candy" />
            </div>
            <div className="info">
              <div className="categories">new design</div>
              <div className="name">new</div>
              <div className="price">10000000</div>
              <Button appearance="primary" onClick={handleOrderClick}>ORDER</Button>
            </div>
          </div>
          <div className="product">
            <div className="image">
              <img src="PIC2.PNG" alt="new design" />
            </div>
            <div className="info">
              <div className="categories">Gdesign</div>
              <div className="name">new</div>
              <div className="price">1000000</div>
              <Button appearance="primary" onClick={handleOrderClick}>ORDER</Button>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <p>This website uses cookies to improve your experience. We'll assume you're ok with this, but you can opt-out if you wish.</p>
      </footer>

      {showForm && <RequestForm onClose={handleCloseForm} />}
    </div>
  );
};

export default Order;
