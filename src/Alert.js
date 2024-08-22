import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Alert() {
  const [audio] = useState(new Audio(`${process.env.PUBLIC_URL}/Siren.mp3`));
  const [showButton, setShowButton] = useState(true); // State to control button visibility

  // Function to play alert sound
  const playAlertSound = () => {
    audio.loop = true; // Set the audio to loop
    audio.play();
  };

  // Function to stop alert sound and remove the button
  const stopAlertSound = () => {
    audio.pause();
    audio.currentTime = 0;
    setShowButton(false); // Hide the button

    // Make API call to Django backend to stop alert and send SMS messages
    axios.post('http://localhost:8000/firenet/api/stop-alert/')
      .then(response => {
        console.log("Alert stopped and messages sent:", response.data);
      })
      .catch(error => {
        console.error("Error stopping alert:", error);
      });
  };

  useEffect(() => {
    // Play alert sound when the component mounts
    playAlertSound();

    // Clean up function to stop the alert sound when the component unmounts
    return () => {
      stopAlertSound();
    };
  }, []); // Run only once when the component mounts

  return (
    <div>
      <div className="alert alert-danger" role="alert">
        This is a danger alert—check it out!
      </div>
      {/* Show the button to stop the alert sound if showButton is true */}
      {showButton && <button onClick={stopAlertSound}>Stop Alert</button>}
    </div>
  );
}
