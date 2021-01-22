import React, { useContext, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';
import exampleData from './exampleData.js';

export const ComparisonModal = (props) => {
  const [show, setShow] = useState(props);

  const handleClose = () => setShow(false);

  const merge = (arr) => {
    return [...new Set([].concat(...arr))];
  }
  var features = merge([props.compProduct.features, props.curProduct.features]);
  features.unshift(props.compProduct.name);
  features.unshift(props.curProduct.name);

  console.log('features: ', features)

  return (
    <Modal
      show={show}
      onHide={handleClose}
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Choices, choices....</Modal.Title>
      </Modal.Header>
        <Modal.Body>
          <table>
            <tr>
              <th>{features[0]}</th>
              <th>{features[1]}</th>
            </tr>
          </table>
        </Modal.Body>
    </Modal>
  );
}

export default ComparisonModal;
