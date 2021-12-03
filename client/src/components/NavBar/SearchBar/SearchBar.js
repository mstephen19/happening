import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOCATION, SET_LON_LAT } from '../../../utils/redux/actions';
import Geocode from 'react-geocode';

export default function SearchBar() {
  const state = useSelector((store) => store);
  // console.log(state);
  const dispatch = useDispatch();

  return (
    <div style={{ zIndex: '99999', width: 'calc(100vw - 200px)' }}>
      <GooglePlacesAutocomplete
        // apiKey='AIzaSyAbu8a2163MJhjkvN3MQwWmamvYJE_jKx8'
        apiKey='AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw'
        selectProps={{
          styles: {
            input: (provided) => ({
              ...provided,
              color: 'blue',
            }),
          },
          onChange: async (val) => {
            Geocode.setApiKey('AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw');
            Geocode.setLocationType('ROOFTOP');
            const res = await Geocode.fromAddress(val.label);
            const { lat, lng } = res.results[0].geometry.location;
            dispatch({ type: SET_LOCATION, payload: val.label });
            dispatch({ type: SET_LON_LAT, payload: { lon: lng, lat } });
          },
        }}
        apiOptions={{
          language: 'en',
        }}
      ></GooglePlacesAutocomplete>
    </div>
  );
}
