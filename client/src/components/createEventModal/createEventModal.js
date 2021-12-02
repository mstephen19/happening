import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { Label, Input, Textarea, } from "@rebass/forms";
import { Box, Flex } from "rebass";

export default function CreateEventForm() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button variant='primary' onClick={handleShow}>
        Create Event
      </Button>

      <Modal show={show} onHide={handleClose}>

        <Box as='form' onSubmit={(e) => e.preventDefault()}  >
            <Box width={1} px={2}>
              <Label htmlFor='name'>Event Name</Label>
              <Input id='eventName' name='name' defaultValue='Concert at the park' />
            </Box>

            <Box width={1} px={2}>
              <Label htmlFor='location'>Event Location</Label>
              <Input id='eventLocation' name='location' defaultValue='532 S Olive St, Los Angeles, CA 90013' />
            </Box>

            <Box width={1} px={2}>
              <Label htmlFor='body'>Event Description</Label>
              <Textarea id='eventBody' name='body' defaultValue='Enter event description. (Provide links if necessary)' />
            </Box>
         
            <Box px={2} ml='auto'>
              <Button>Submit Event</Button>
            </Box>
          

        </Box>
      </Modal>
    </div>
  );
}
