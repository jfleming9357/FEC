import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const AddReview = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='jButton' onClick={handleShow}>Add A Review</button>
      <Modal show={show}
        onHide={handleClose}
        dialogClassName='jModal'
      >
        <Form>
          Write a review <br />
          {['checkbox', 'radio'].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />

              <Form.Check
                disabled
                type={type}
                label={`disabled ${type}`}
                id={`disabled-default-${type}`}
              />
            </div>
          ))}
        </Form>
      </Modal>
    </div>
  );
};

export default AddReview;