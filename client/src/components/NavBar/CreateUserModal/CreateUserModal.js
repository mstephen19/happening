import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import CreateUserForm from './CreateUserForm';

export default function CreateUserModal(props) {
  return (
    <Modal
      {...props}
      size='lg'
      aria-labelledby='contained-modal-title-vcenter'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          Create Account
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <CreateUserForm />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
