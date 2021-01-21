import React, { useState, useEffect } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import exampleData from './exampleData.js';

export const ComparisonModal = () => {
  return (
      <div
        onClick={() => {/* CLOSE MODAL */}}
      >X
      <Modal
        show={show}
        backdrop="static"
        keyboard={false}>
        <Modal.Header>
          <Modal.Title as="p">About the THING</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          TABLE HERE
        </Modal.Body>
      </Modal>
          </div>
  );
}

export default ComparisonModal;
