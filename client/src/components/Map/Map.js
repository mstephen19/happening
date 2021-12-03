import React, { useState } from 'react';
import ReactMapGL from 'react-map-gl';

export default function Map() {
  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: '100%',
    height: '100%',
    pitch: 20,
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
