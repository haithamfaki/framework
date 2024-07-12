import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Dashboard';
import Order from './Components/order';
import Login from './Components/styles/Login';
import Sidebar from './Components/Sidebar';
import Header from './Components/Header';
import OrderLists from './Components/OrderLists';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path='login' element={<Login/>}/>
        <Route path='dashboard'element={<FullDashboard/>}/>
        <Route path='orderlist' element={<FullOrderLists/>}/>
      </Routes>
    </Router>
  );
}

const FullDashboard = () => {
    return(
      <div>
        <Header/>
        <div>
        <Sidebar/>
        <Dashboard/>
        </div>
      </div>

    );
  
}

const FullOrderLists = () =>{
  return(
      <div>
        <Header/>
        <div>
          <Sidebar/>
          <OrderLists/>

        </div>
      </div>
  );
}

export default App;
