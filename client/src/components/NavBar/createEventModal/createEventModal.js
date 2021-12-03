import React, { useState } from "react";
import { Button} from "react-bootstrap";
import { Label, Input, Textarea } from "@rebass/forms";
import { Box } from "rebass";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../../../utils/mutations";

export default function CreateEventForm(props) {

  const [createEvent, { error, loading, data }] = useMutation(CREATE_EVENT);
  const [formValues, setFormValues] = useState({
    name: "",
    address: "",
    location: "",
    body: "",
  });

  const [successText, setSuccessText] = useState(false)

  const Success = () => {
    return (
          <Box px={1} py={1} ml='auto' color='green'>
            <p>Success</p>
          </Box>
    )
  }

  const handleFormChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit entered");

    try {
      const { data } = await createEvent({
        variables: {
          name: formValues.name,
          address: formValues.address,
          location: formValues.location,
          body: formValues.body,
        },
      });

      setFormValues({
        name: "",
        address: "",
        location: "",
        body: "",
      });
      
      setSuccessText(true);

    } catch (err) {
      alert("Failed to create event");
    }
  };

  return (
        <Box
          as='form'
          py={2}
          onChange={handleFormChange}
          onSubmit={handleFormSubmit}
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
            <Label htmlFor='address'>Event Location</Label>
            <Input
              id='eventLocation'
              name='address'
              placeholder='532 S Olive St'
              value={formValues.address}
            />
          </Box>

          <Box width={1} px={2} py={1}>
            <Label htmlFor='location'>Event Location</Label>
            <Input
              id='eventLocation'
              name='location'
              placeholder='Los Angeles, CA 90013'
              value={formValues.location}
            />
          </Box>

          <Box width={1} px={2} py={1}>
            <Label htmlFor='body'>Event Description</Label>
            <Textarea
              rows='6'
              id='eventBody'
              name='body'
              placeholder='Enter event description. (Provide links if necessary)'
              value={formValues.body}
            />
          </Box>

          <Box px={2} py={1} ml='auto'>
            <Button type='submit'>Submit Event</Button>
          </Box>

          { successText ? <Success /> : null }

        </Box>

  );
}
