import React, { useContext, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';
import { ProductContext } from '../../context/ProductContext';
import axios from 'axios';

const AddAnswer = ({ question_id }) => {
    const { curProduct } = useContext(ProductContext);
    const [show, setShow] = useState(false);
    const [ answer, setAnswer ] = useState('');
    const [ nickname, setNickname ] = useState('');
    const [ email, setEmail ] = useState('');

    const handleClickSubmit = () => {
        axios.post(`proxy/api/fec2/hratx/qa/questions/${question_id}/answers`, { body: answer, name: nickname, email: email, photos: [] })
          .then(res => console.log(res))
          .catch(err => {throw err});
        setShow(false);
    }
    
    return <>
        <span
            onClick={() => setShow(true)}
            className="d-underlined"
        >
            Add Answer
        </span>
        <Modal
            show={show}
            onHide={() => setShow(false)}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header>
            <Modal.Title>Ask Your Question</Modal.Title>
            <Modal.Title as="p">About the {curProduct.name}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form>
                <Form.Group>
                <Form.Label>Your Answer</Form.Label>
                <Form.Control required type="text" as="textarea" onChange={(e) => setAnswer(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Your Nickname</Form.Label>
                <Form.Control required type="text" placeholder="example&#58; jackson11!" onChange={(e) => setNickname(e.target.value)} />
                </Form.Group>
                <Form.Group>
                <Form.Label>Your Email</Form.Label>
                <Form.Control required type="email" placeholder="joe_josephson@joe.com" onChange={(e) => setEmail(e.target.value)}/>  
                </Form.Group>
            </Form>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Close
            </Button>
            <Button variant="primary" onClick={handleClickSubmit}>
                Submit
            </Button>
            </Modal.Footer>
        </Modal>
    </>;
}

export default AddAnswer;