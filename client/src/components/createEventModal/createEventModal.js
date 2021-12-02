import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Label, Input, Textarea, } from "@rebass/forms";
import { Box } from "rebass";
import { useMutation } from "@apollo/client";
import { CREATE_EVENT } from "../../utils/mutations";
import Auth from '../../utils/auth';

export default function CreateEventForm() {
  const [show, setShow] = useState(false);

  const { user } = Auth.getProfile();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [createEvent, { error, loading, data }] = useMutation(CREATE_EVENT);
  const [formValues, setFormValues] = useState({
    name: '',
    address: '',
    location: '',
    body: '',
  });

  const handleFormChange = (e) => {
    const currentState = { ...formValues };
    currentState[e.target.name] = e.target.value;
    setFormValues(currentState);
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submit entered')
    console.log(user);
    try {
        const { data } = await createEvent({
          variables: {
            name: formValues.name,
            address: formValues.address,
            location: formValues.location,
            body: formValues.body,
            creator: user
          }
        });

        setFormValues({
          name: '',
          address: '',
          location: '',
          body: ''
        })

    } catch (err) {
      alert('Failed to create event');
    }
  }

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create Event
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose}>

        <Box as='form' py={2} onChange={handleFormChange}  onSubmit={handleFormSubmit} >
            <Box width={1} px={2}>
              <Label htmlFor='name'>Event Name</Label>
              <Input id='eventName' name='name' placeholder='Concert at the park' />
            </Box>

            <Box width={1} px={2} py={1}>
              <Label htmlFor='address'>Event Location</Label>
              <Input id='eventLocation' name='address' placeholder='532 S Olive St' />
            </Box>

            <Box width={1} px={2} py={1}>
              <Label htmlFor='location'>Event Location</Label>
              <Input id='eventLocation' name='location' placeholder='Los Angeles, CA 90013' />
            </Box>

            <Box width={1} px={2} py={1}>
              <Label htmlFor='body'>Event Description</Label>
              <Textarea rows="6" id='eventBody' name='body' placeholder='Enter event description. (Provide links if necessary)' />
            </Box>
         
            <Box px={2} py={1} ml='auto'>
              <Button type="submit">Submit Event</Button>
            </Box>
          

        </Box>
      </Modal>
    </div>
  );
}
