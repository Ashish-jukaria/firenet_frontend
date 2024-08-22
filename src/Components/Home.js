import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Navbar from './Navbar';

const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enable automatic slideshow
    autoplaySpeed: 3000, // Set the interval for automatic slideshow (in milliseconds)
    speed: 500,
    slidesToShow: 2, // Show 2 slides at a time
    slidesToScroll: 1,
    cssEase: 'linear', // Ensure linear transition between slides
    centerMode: true, // Center the active slide
    centerPadding: '50px' // Add padding between slides
  };

  const images = [
    "/1.webp",
    "/2.webp",
    "/3.avif",
    "/4.webp",
    "/5.jpg",
    "/6.jpg"
  ];

  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.heading}>Welcome to Fire Net</h1>
        <p style={styles.description}>
          Fire Net is your comprehensive solution for fire detection and prevention. Our advanced technology, powered by IoT and machine learning, ensures the safety and security of your property.
        </p>
        <p style={styles.description}>
          Explore our features and services to learn more about how Fire Net can protect what matters most to you.
        </p>
      </div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} style={styles.imageContainer}>
            <img src={image} alt={`Image ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Home;

const styles = {
  container: {
    padding: '40px',
    textAlign: 'center',
  },
  heading: {
    fontSize: '36px',
    fontWeight: 'bold',
    color: '#333',
    marginBottom: '20px',
  },
  description: {
    fontSize: '18px',
    color: '#666',
    marginBottom: '20px',
  },
  imageContainer: {
    textAlign: 'center',
  },
  image: {
    width: '100%', // Adjusted to fill the slider container
    height: '520px', // Maintain aspect ratio
    marginBottom: '20px', // Add some space between images
  },
};
