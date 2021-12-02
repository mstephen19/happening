import React from 'react';
import { Form } from 'react-bootstrap';

export default function CreateEventForm() {
    return (
        <div>
            <h1>Create Event</h1>
            <Form>

            <Form.Group className="mb-3" controlId="eventName">
                <Form.Label>Event Name</Form.Label>
                <Form.Control type="text" placeholder="Concert at the park" />
            </Form.Group>

            <Form.Group className='mb-3' controlId="eventLocation">
                <Form.Label>Event Location (Include links to ticket sites)</Form.Label>
                <Form.Control type='text' placeholder=" 532 S Olive St, Los Angeles, CA 90013" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="eventBody">
                <Form.Label>Event Description</Form.Label>
                <Form.Control as="textarea" rows={3} />
            </Form.Group>

            </Form>
        </div>
    )
};