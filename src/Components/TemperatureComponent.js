import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '../Alert';
import Map from './Map';

const TemperatureComponent = () => {
  const [sensorData, setSensorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSensorData = async () => {
      try {
        const response = await axios.get('http://localhost:8000/firenet/api/latest-sensor-data/');
        setSensorData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching sensor data:', error);
        setError('Error fetching sensor data. Please try again.');
        setLoading(false);
      }
    };

    fetchSensorData();

    const intervalId = setInterval(fetchSensorData, 5000);

    return () => clearInterval(intervalId);
  }, []);

  if (loading) {
    return <p>Loading sensor data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {sensorData.fire_prediction && <Alert />}
      <div style={{ marginBottom: '20px' }}>
        <h3>Temperature: {sensorData.temperature}°C</h3>
        <div style={{ backgroundColor: '#e0e0e0', borderRadius: '10px', width: '100%', height: '20px', marginBottom: '10px' }}>
          <div style={{ backgroundColor: '#007bff', borderRadius: '10px', width: `${sensorData.temperature}%`, height: '100%' }}></div>
        </div>
        <h3>Humidity: {sensorData.humidity}%</h3>
        <div style={{ backgroundColor: '#e0e0e0', borderRadius: '10px', width: '100%', height: '20px' }}>
          <div style={{ backgroundColor: '#28a745', borderRadius: '10px', width: `${sensorData.humidity}%`, height: '100%' }}></div>
        </div>
      </div>
      {sensorData && sensorData.fire_prediction && <Map />}
    </div>
  );
};

export default TemperatureComponent;
