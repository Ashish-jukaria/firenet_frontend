import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Alert from '../Alert';

const TemperatureComponent = () => {
  const [temperature, setTemperature] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch temperature data from the server
    const fetchTemperatureData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/firenet/temperatures/');
        setTemperature(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching temperature:', error);
        setLoading(false);
      }
    };

    // Fetch temperature data initially when the component mounts
    fetchTemperatureData();

    // Set up interval to fetch temperature data every 5 seconds
    const intervalId = setInterval(fetchTemperatureData, 5000);

    // Clean up function to clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const generateRandomTemperature = () => {
    const randomTemperature = Math.floor(Math.random() * (100 - 15 + 1) + 15);
    return randomTemperature;
  };

  const updateTemperature = async () => {
    const randomTemp = generateRandomTemperature();
    try {
      await axios.put('http://127.0.0.1:8000/firenet/temperatures/1/', { temp: randomTemp });
    } catch (error) {
      console.error('Error updating temperature:', error);
    }
  };

  useEffect(() => {
    const updateIntervalId = setInterval(updateTemperature, 5000);
    return () => clearInterval(updateIntervalId);
  }, []);


  const getTemperatureColor = () => {
    if (!temperature) return 'black';
    const tempValue = temperature.temp;
    if (tempValue < 33) {
      return 'bg-success'; // Below 33 - green
    } else if (tempValue >= 33 && tempValue <= 50) {
      return 'bg-info'; // Between 33 and 50 - blue
    } else if (tempValue > 50 && tempValue <= 75) {
      return 'bg-warning'; // Between 50 and 75 - yellow
    } else {
      return 'bg-danger'; // Above 75 - red
    }
  };

  const getLoadingPercentage = () => {
    if (!temperature) return '0%';
    const tempValue = temperature.temp;
    return `${Math.min(Math.max(tempValue, 0), 100)}%`;
  };

  return (
    <div>
      {loading ? (
        // Display loading bars
        <div>
          <div className="progress">
            <div className="progress-bar progress-bar-striped" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}></div>
          </div>
          {/* Add more loading bars for different percentages */}
          <p>Loading temperature...</p>
        </div>
      ) : (
        temperature && (
          <div>
            {/* Display temperature information */}
            <h3 style={{ textAlign: 'center', marginTop: '20px', marginBottom: '20px' }}>Current Temperature: {temperature.temp}</h3>
            {/* Display Alert component if temperature is above 70 */}
            {temperature.temp > 70 && <Alert />}
            {/* Display progress bar */}
            <div className="progress">
              <div className={`progress-bar progress-bar-striped ${getTemperatureColor()}`} role="progressbar" style={{ width: getLoadingPercentage() }} aria-valuenow={temperature.temp} aria-valuemin={0} aria-valuemax={100}></div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default TemperatureComponent;
