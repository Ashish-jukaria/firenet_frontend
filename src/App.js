import './App.css';
import Navbar from './Components/Navbar';
import TemperatureComponent from './Components/TemperatureComponent';
import React from 'react';
import Map from "./Components/Map"; // Import your custom Map component

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TemperatureComponent/>
      <Map /> {/* Render your custom Map component */}
    </div>
  );
}

export default App;
