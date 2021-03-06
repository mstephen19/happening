import React, { useState } from "react";
import { Label, Input, Textarea } from "@rebass/forms";
import { Box, Button } from "rebass";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../../../utils/mutations";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import DatePicker from 'react-date-picker';

export default function CreateEventForm() {
  const [createEvent, { error, loading, data }] = useMutation(CREATE_EVENT);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    location: "",
    body: "",
  });

  // Renders success status text on successful submit
  const [successText, setSuccessText] = useState(false);
  const Success = () => {
    return (
      <Box px={1} py={1} ml='auto' color='green'>
        <p>Success</p>
      </Box>
    );
  };

  const [errorText, setErrorText] = useState(false);
  const Failure = () => {
    return (
      <Box px={1} ml='auto' color='red'>
        <p>Failed to create event, please try again.</p>
      </Box>
    )
  };

// Values for calendar
const [startDate, setStartDate] = useState(new Date());

  // Changes values of inputs during changes
  const handleFormChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  };

  // Submits form with values from input fields
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit entered");

    try {
      console.log(startDate);
      const { data } = await createEvent({
        variables: {
          name: formValues.name,
          address: `${formValues.address} ${formValues.location}`,
          location: formValues.location,
          body: formValues.body,
          day: new Date(startDate),
        },
      });
      console.log(data);
      // Resets form values to blank
      setFormValues({
        name: "",
        address: "",
        location: "",
        body: "",
      });
      // Toggles visible success text
      setSuccessText(true);
    } catch (err) {
      console.log(err);
      setErrorText(true);
    }
  };

  return (
    <Box
      as='form'
      py={2}
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
      style={{ zIndex: '99999' }}
    >
      <Box width={1} px={2}>
        <Label htmlFor='name'>Event Name</Label>
        <Input
          id='eventName'
          name='name'
          placeholder='Concert at the park'
          value={formValues.name}
        />
      </Box>

      <Box width={1} px={2} py={1}>
        <Label htmlFor='address'>Event Street Address (Exact)</Label>
        <Input
          id='address'
          name='address'
          placeholder='532 S Olive St'
          value={formValues.address}
        />
      </Box>

      <Box width={1} px={2} py={1}>
        <Label htmlFor='location'>Event City</Label>
        <GooglePlacesAutocomplete
          // apiKey='AIzaSyAbu8a2163MJhjkvN3MQwWmamvYJE_jKx8'
          apiKey='AIzaSyC43U2-wqXxYEk1RBrTLdkYt3aDoOxO4Fw'
          selectProps={{
            styles: {
              input: (provided) => ({
                ...provided,
                color: "blue",
              }),
            },
            onChange: (val) => {
              setFormValues((prev) => ({
                ...prev,
                location: val.label,
              }));
            },
          }}
          apiOptions={{
            language: "en",
          }}
        ></GooglePlacesAutocomplete>
      </Box>

      <Box width={1} px={2} py={1}>
        <Label htmlFor='date'>Event Date</Label>
        <DatePicker id='date' name='date' value={startDate} onChange={(date) => setStartDate(date)} />
      </Box>

      <Box width={1} px={2} py={1}>
        <Label htmlFor='body'>Event Description</Label>
        <Textarea
          style={{ minHeight: "100px" }}
          rows='6'
          id='eventBody'
          name='body'
          placeholder='Enter event description. (Provide links if necessary)'
          value={formValues.body}
        />
      </Box>

      <Box px={2} py={1} ml='auto'>
        <Button bg='blue' type='submit'>Submit Event</Button>
      </Box>

      {successText ? <Success /> : null}
      {errorText ? <Failure /> : null}
    </Box>
  );
}
