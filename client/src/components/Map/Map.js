import React, { useState, useEffect } from 'react';
import ReactMapGL from 'react-map-gl';
import debounce from '../../utils/debounce';

export default function Map() {
  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
    pitch: 20,
  });

  useEffect(() => {
    const handleResize = debounce(() => {
      setViewport((prev) => ({
        ...prev,
        width: window.innerWidth,
        height: window.innerHeight,
      }));
    }, 500);
    window.addEventListener('resize', handleResize);
  });

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactMapGL
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
        mapboxApiAccessToken='pk.eyJ1IjoibXN0ZXBoZW4xOSIsImEiOiJja3dwazdsbGswYnZ0MnFxaGQ5N2ZuM3BlIn0.Xxzi2fiuuUu-bRbhnRdemA'
        mapStyle={'mapbox://styles/mapbox/dark-v9'}
      />
    </div>
  );
}
