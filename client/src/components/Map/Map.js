import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker } from 'react-map-gl';
import debounce from '../../utils/debounce';
import { useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { GET_EVENTS_BY_LOCATION } from '../../utils/queries';
import Loading from '../Loading';

export default function Map() {
  const state = useSelector((store) => store.search);
  // console.log(state);
  const [makeQuery, { loading, data, error }] = useLazyQuery(
    GET_EVENTS_BY_LOCATION,
    {
      variables: { location: state },
    }
  );

  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8,
    width: window.innerWidth,
    height: window.innerHeight,
    pitch: 20,
  });

  useEffect(() => {
    let isMounted = true;
    (async () => {
      await makeQuery();
      if (isMounted) {
        setViewport((prev) => ({
          ...prev,
          latitude: data.events[0].latitude,
          longitude: data.events[0].longitude,
        }));
      }
    })();
    return () => {
      isMounted = false;
    };
  }, [state, data]);

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
      {loading && <Loading />}
      <ReactMapGL
        {...viewport}
        onViewportChange={(newView) => setViewport(newView)}
        mapboxApiAccessToken='pk.eyJ1IjoibXN0ZXBoZW4xOSIsImEiOiJja3dwazdsbGswYnZ0MnFxaGQ5N2ZuM3BlIn0.Xxzi2fiuuUu-bRbhnRdemA'
        mapStyle={'mapbox://styles/mapbox/dark-v9'}
      >
        {data &&
          !loading &&
          !error &&
          data.events.map((event) => {
            return (
              <Marker
                key={event._id}
                latitude={event.latitude}
                longitude={event.longitude}
              >
                <p style={{ color: 'white' }}>This will be a pin</p>
              </Marker>
            );
          })}
      </ReactMapGL>
    </div>
  );
}
