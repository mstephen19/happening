import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Label, Input, Textarea, } from "@rebass/forms";
import { Box } from "rebass";

export default function CreateEventForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create Event
      </Button>

      <Modal size='lg' centered show={show} onHide={handleClose}>

        <Box as='form' py={2} onSubmit={(e) => e.preventDefault()}  >
            <Box width={1} px={2}>
              <Label htmlFor='name'>Event Name</Label>
              <Input id='eventName' name='name' defaultValue='Concert at the park' />
            </Box>

            <Box width={1} px={2} py={1}>
              <Label htmlFor='location'>Event Location</Label>
              <Input id='eventLocation' name='location' defaultValue='532 S Olive St, Los Angeles, CA 90013' />
            </Box>

            <Box width={1} px={2} py={1}>
              <Label htmlFor='body'>Event Description</Label>
              <Textarea rows="6" id='eventBody' name='body' defaultValue='Enter event description. (Provide links if necessary)' />
            </Box>
         
            <Box px={2} py={1} ml='auto'>
              <Button>Submit Event</Button>
            </Box>
          

        </Box>
      </Modal>
    </div>
  );
}
