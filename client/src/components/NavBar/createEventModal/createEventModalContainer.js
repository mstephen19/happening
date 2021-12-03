import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateEventForm from './createEventModal';

export default function createEventModal(props) {
    return (
        <Modal
        {...props}
        size='lg'
        centered
        aria-labelledby='contained-modal-title-vcenter'
        >
            <Modal.Header closeButton>
                <Modal.Title id='contained-modal-title-vcenter'>
                    Create an Event
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <CreateEventForm />
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>

        </Modal>
    )
}