import React from 'react';

const About = () => {
  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.content}>
          <h1 style={styles.title}>Welcome to Firenet</h1>
          <p style={styles.description}>
            At Firenet, we're dedicated to revolutionizing fire detection and prevention through the seamless integration of IoT and machine learning technologies.
          </p>
          <p style={styles.description}>
            Our mission is to utilize the power of technology to safeguard lives and property against the devastating effects of fire. By harnessing the capabilities of IoT sensors and advanced machine learning algorithms, we strive to provide proactive fire detection solutions that are reliable, efficient, and accessible to all.
          </p>
          <p style={styles.description}>
            Whether you're a homeowner, business owner, or community leader, Firenet is here to partner with you in safeguarding lives and property against the threat of fire.
          </p>
        </div>
      </div>

      <div style={styles.card}>
        <h2 style={styles.heading}>Meet the Team</h2>
        <div style={styles.team}>
          <div style={styles.member}>
            <p style={styles.memberName}>Abhas Kumar</p>
          </div>
          <div style={styles.member}>
            <p style={styles.memberName}>Arsh Aniket Singh</p>
          </div>
          <div style={styles.member}>
            <p style={styles.memberName}>Ashish Jukaria</p>
          </div>
          <div style={styles.member}>
            <p style={styles.memberName}>Ayush Singh</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    maxWidth: '800px',
    width: '100%',
    margin: '20px',
    padding: '20px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  content: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  title: {
    fontSize: '36px',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '15px',
    fontFamily: 'Arial, sans-serif',
  },
  heading: {
    fontSize: '24px',
    color: '#333',
    marginBottom: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  team: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  member: {
    marginRight: '20px',
    marginBottom: '20px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
  },
  memberName: {
    fontSize: '20px',
    color: '#333',
    margin: '0',
    fontFamily: 'Arial, sans-serif',
  },
};
