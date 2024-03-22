import React, { useEffect, useState, useRef } from 'react';
import mapboxgl from 'mapbox-gl';

const Map = () => {
  const [map, setMap] = useState(null);
  const mapContainerRef = useRef(null); // Define mapContainerRef

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYXJzaHNpbmdoMzAiLCJhIjoiY2x0eWVyY2JqMGVndjJqczd0OGRjbjRmcCJ9.IBXwX0txDivKOIkvKGE3hg';
    
    const initializeMap = ({ setMap, mapContainer }) => {
      const mapInstance = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [77.5946, 12.9716], // Center on Bangalore
        zoom: 12, // Zoom level for Bangalore
      });

      mapInstance.on('load', () => {
        setMap(mapInstance);
        displayDirections(mapInstance);
      });
    };

    if (!map) initializeMap({ setMap, mapContainer: mapContainerRef });
  }, [map]);

  const displayDirections = (mapInstance) => {
    // Example coordinates (Bangalore and Mumbai)
    const origin = [77.5946, 12.9716];
    const destination = [72.8777, 19.0760];

    // Add the directions layer
    mapInstance.addLayer({
      id: 'route',
      type: 'line',
      source: {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [origin, destination],
          },
        },
      },
      layout: {
        'line-join': 'round',
        'line-cap': 'round',
      },
      paint: {
        'line-color': '#888',
        'line-width': 8,
      },
    });

    // Fit map to the route
    const bounds = new mapboxgl.LngLatBounds();
    bounds.extend(origin);
    bounds.extend(destination);
    mapInstance.fitBounds(bounds, { padding: 100 });
  };

  return <div ref={mapContainerRef} style={{ width: '100%', height: '600px' }} />;
};

export default Map;
