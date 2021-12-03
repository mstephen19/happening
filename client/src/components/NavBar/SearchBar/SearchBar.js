import React from 'react';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import { Button, Flex, Box } from 'rebass';

export default function SearchBar() {
  return (
    // <Flex
    //   onSubmit={(e) => {
    //     e.preventDefault();
    //     console.log('working');
    //   }}
    //   style={{ width: '75%', background: 'green', height: 'auto' }}
    // >
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
        }}
        apiOptions={{
          language: 'en',
        }}
      ></GooglePlacesAutocomplete>
    </>
    // <Button type='submit'>Submit</Button>
    // </Flex>
  );
}
