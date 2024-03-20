
import React from 'react';
import Navbar from './components/navbar'; // Fix the casing of the file name
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Navbar />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
