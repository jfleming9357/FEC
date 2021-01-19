import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const AddReview = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <button className='jButton' onClick={handleShow}>Add A Review</button>
      <Modal show={show}
        onHide={handleClose}>
          tempProductQuestions
      </Modal>
      //////
    </div>
  );
};

export default AddReview;