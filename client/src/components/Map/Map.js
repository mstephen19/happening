import React, { useState, useEffect } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';

import debounce from '../../utils/debounce';
import { useSelector } from 'react-redux';
import { useLazyQuery } from '@apollo/client';
import { GET_EVENTS_BY_LOCATION } from '../../utils/queries';
import Loading from '../Loading';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import Sidebar from './Sidebar/Sidebar';
import EventCard from './EventCard';
import EventPopup from './EventPopup';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-webpack-loader-syntax
mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;

export default function Map() {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const state = useSelector((store) => store);
  const [makeQuery, { loading, data, error }] = useLazyQuery(
    GET_EVENTS_BY_LOCATION,
    {
      variables: { location: state.search },
    }
  );

  let [viewport, setViewport] = useState({
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 10,
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
          latitude: state.latitude,
          longitude: state.longitude,
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

  // console.log(data?.events);

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
                offsetTop={-(viewport.zoom * 5) / 2}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedEvent(event);
                }}
              >
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  color='white'
                  size='2x'
                />
              </Marker>
            );
          })}

        {selectedEvent && (
          <Popup
            latitude={selectedEvent.latitude}
            longitude={selectedEvent.longitude}
            onClose={() => setSelectedEvent(null)}
            offsetTop={-(viewport.zoom * 5) / 2}
          >
            <EventPopup event={selectedEvent}/>
          </Popup>
        )}
      </ReactMapGL>
      <Sidebar text={`Results in ${state.search.split(',').shift()}`}>
        {data?.events.map((event) => {
          return (
            <Link to={`/event/${event._id}`}>
              <EventCard
                key={event._id}
                title={event.name}
                creator={event?.creator?.username}
                body={`${event.body.substring(0, 100)}...`}
              />
            </Link>
          );
        })}
      </Sidebar>
    </div>
  );
}
