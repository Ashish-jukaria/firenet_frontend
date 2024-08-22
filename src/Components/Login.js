import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:8000/firenet/login/', {
        username,
        password,
      });
      
      // Assuming the backend returns user data upon successful login
      const userData = response.data;
      console.log(userData);
      
      // Call the onLogin function passed from the parent component
      onLogin();
      
      // Redirect to TemperatureComponent after successful login
      navigate('/temperature');
    } catch (error) {
      setError('Invalid username or password');
    }
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Login</h2>
      <form onSubmit={handleLogin} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="username" style={styles.label}>Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label htmlFor="password" style={styles.label}>Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
}

export default Login;

const styles = {
  container: {
    maxWidth: '500px', // Increased size of the container
    margin: 'auto', // Centering the container horizontally
    padding: '40px', // Increased padding to increase size
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px', // Increased font size of heading
    color: '#333',
    marginBottom: '30px', // Increased margin bottom for spacing
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  inputGroup: {
    marginBottom: '30px', // Increased spacing between input fields
  },
  label: {
    marginBottom: '10px', // Increased spacing below labels
    fontSize: '24px', // Increased font size of labels
    color: '#555',
  },
  input: {
    padding: '16px', // Increased padding of input fields
    borderRadius: '8px', // Increased border radius
    border: '1px solid #ccc',
    fontSize: '20px', // Increased font size of input fields
  },
  button: {
    padding: '18px', // Increased padding of button
    borderRadius: '8px', // Increased border radius
    border: 'none',
    backgroundColor: '#007bff',
    color: '#fff',
    fontSize: '24px', // Increased font size of button
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '18px', // Increased font size of error message
    marginTop: '20px', // Increased margin top for spacing
  },
};
