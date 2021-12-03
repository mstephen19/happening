import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import { SET_LOCATION } from '../../../utils/redux/actions';

export default function SearchBar() {
  const state = useSelector((store) => store);
  // console.log(state);
  const dispatch = useDispatch();
  return (
    <>
      <GooglePlacesAutocomplete
        apiKey='AIzaSyAbu8a2163MJhjkvN3MQwWmamvYJE_jKx8'
        selectProps={{
          styles: {
            input: (provided) => ({
              ...provided,
              color: 'blue',
            }),
          },
          onChange: (val) => {
            dispatch({ type: SET_LOCATION, payload: val.label });
          },
        }}
        apiOptions={{
          language: 'en',
        }}
      ></GooglePlacesAutocomplete>
    </>
  );
}
