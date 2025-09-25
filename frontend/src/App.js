import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Placeholder for future components
const Home = () => <div>Welcome to Healfy</div>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App; 