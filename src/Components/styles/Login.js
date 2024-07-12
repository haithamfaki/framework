import React from 'react';
import { useNavigate } from 'react-router-dom';
import './login .css';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here (e.g., authentication with a server)

    // If login is successful, navigate to the dashboard
    navigate('/dashboard');
  };

  return (
    <div className='body'>
      <div className="container">
        <form className="form-box" onSubmit={handleSubmit}>
          <h2>Login</h2>
          <div className="input-box">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="input-box">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button className='form-login-button' type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
