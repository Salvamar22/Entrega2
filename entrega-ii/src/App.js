import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketPurchase from './pages/buytickets';
import TicketsPurchased from './pages/viewtickets';
import Login from './pages/loginform';
import Feed from './pages/feed';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/feed" element={<Feed />} />
        <Route path="/" element={<Login />} />
        <Route path="/purchase" element={<TicketPurchase />} />
        <Route path="/tickets-purchased" element={<TicketsPurchased />} />
      </Routes>
    </Router>
  );
};

export default App;
