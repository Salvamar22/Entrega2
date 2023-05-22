import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TicketPurchase from './components/buytickets';
import TicketsPurchased from './components/viewtickets';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TicketPurchase />} />
        <Route path="/tickets-purchased" element={<TicketsPurchased />} />
      </Routes>
    </Router>
  );
};

export default App;
