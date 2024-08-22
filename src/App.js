import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import TemperatureComponent from './Components/TemperatureComponent';
import Map from "./Components/Map";
import ChartComponent from './Components/ChartComponent';
import Login from './Components/Login';
import Home from './Components/Home';
import About from './Components/About';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login
  const handleLogin = () => {
    // Implement your login logic here
    setIsLoggedIn(true);
  };

  // Function to handle logout
  const handleLogout = () => {
    // Implement your logout logic here
    setIsLoggedIn(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        {/* Pass isLoggedIn and handleLogout as props to Navbar */}
        <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
        <Routes>
          {!isLoggedIn && <Route path="/" element={<Home />} />}
          <Route path="/about" element={<About />} />

          {/* Render TemperatureComponent and ChartComponent only when logged in */}
          {isLoggedIn && (
            <>
              <Route path="/temperature" element={<TemperatureComponent />} />
              <Route path="/chart" element={<ChartComponent />} />
            </>
          )}
          {/* Always render Map component */}
          <Route path="/map" element={<Map />} />
          {/* Render Login component only when not logged in */}
          {!isLoggedIn && <Route path="/login" element={<Login onLogin={handleLogin} />} />}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
