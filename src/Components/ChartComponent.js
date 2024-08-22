import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Bar, Line, Doughnut, Pie, PolarArea, Radar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiUrl = 'http://localhost:8000/firenet/api/all-sensor-data/';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setChartData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Error fetching data. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (!chartData) {
    return <p>No data available.</p>;
  }

  const labels = Object.keys(chartData);
  const humidityData = labels.map(label => chartData[label].humidity);
  const temperatureData = labels.map(label => chartData[label].temperature);

  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const barChartData = {
    labels: labels,
    datasets: [
      {
        label: 'Humidity',
        data: humidityData,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
      {
        label: 'Temperature',
        data: temperatureData,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const pieChartData = {
    labels: ['Humidity', 'Temperature'],
    datasets: [
      {
        label: 'Humidity vs Temperature',
        data: [humidityData.reduce((acc, curr) => acc + curr), temperatureData.reduce((acc, curr) => acc + curr)],
        backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(255, 99, 132, 0.2)'],
        borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Bar Chart</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Bar data={barChartData} options={chartOptions} />
      </div>
      <h2>Line Chart</h2>
      <div style={{ width: '100%', height: '300px' }}>
        <Line data={barChartData} options={chartOptions} />
      </div>
    
    </div>
  );
};

export default ChartComponent;
