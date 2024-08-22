import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions.css';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions';

const Map = () => {
  const mapContainerRef = useRef(null);
  const directionsRef = useRef(null);
  const defaultOrigin = [77.56118630987763, 12.922163163006687];
  const defaultDestination = [77.5142212037549, 12.825204708926208];

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJzaHNpbmdoMzAiLCJhIjoiY2x0eWVyY2JqMGVndjJqczd0OGRjbjRmcCJ9.IBXwX0txDivKOIkvKGE3hg';

    const mapInstance = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: defaultOrigin, // Set default origin as map center
      zoom: 12,
    });

    mapInstance.on('load', () => {
      initializeDirectionsControl(mapInstance);
      startRoute(); // Start route automatically when map loads
    });
  }, []);

  const initializeDirectionsControl = (mapInstance) => {
    const directions = new MapboxDirections({
      accessToken: mapboxgl.accessToken,
      unit: 'metric',
      profile: 'mapbox/driving',
      controls: { instructions: true, profileSwitcher: true },
    });

    mapInstance.addControl(directions, 'top-left');
    directionsRef.current = directions;

    // Set the origin and destination
    directionsRef.current.setOrigin(defaultOrigin);
    directionsRef.current.setDestination(defaultDestination);
  };

  const startRoute = () => {
    if (directionsRef.current) {
      // Manually set origin and destination to trigger route calculation
      directionsRef.current.setOrigin(defaultOrigin);
      directionsRef.current.setDestination(defaultDestination);
    }
  };

  return (
    <div>
      <div ref={mapContainerRef} style={{ width: '100%', height: '600px' }} />
    </div>
  );
};

export default Map;
