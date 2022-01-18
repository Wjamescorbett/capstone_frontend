import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {Form, Button, Container} from 'react-bootstrap';
import jwtDecode from "jwt-decode";

const GetUserQuotes = (props) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    props.getQuotesFromUser(props.currentQuoteData[4])
    console.log("TEST", props.allUserQuotes)
  }


  return (
    <Container key={Math.random()}>
      <Button variant="primary" onClick={()=>handleShow()}>
        See User Posts
      </Button>
      <Modal show={show}>
        <Modal.Header closeButton>
          <Modal.Title>User's Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postedCommentText">
              <Form.Label></Form.Label>
              <Form.Label></Form.Label>
              <Form.Label></Form.Label>
              <Form.Label></Form.Label>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>handleOnClick()}>
            Get Quotes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GetUserQuotes;