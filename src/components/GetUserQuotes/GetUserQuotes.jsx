import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import {Form, Button, Container} from 'react-bootstrap';
import jwtDecode from "jwt-decode";

const GetUserQuotes = (props) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    console.log("CHAD", props.allUserQuotes)
    props.getQuotesFromUser(props.currentQuoteData[4])
    handleClose();
  }


  return (
    <Container key={Math.random()}>
      <Button variant="primary" onClick={()=>handleShow()}>
        See User Posts
      </Button>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>User's Posts</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
        {props.allUserQuotes.map((e) => {
            return(
            <Form.Group className="mb-3" controlId="postedCommentText">
              <Form.Label>Comment Text:</Form.Label>
              <Form.Label>Comment Text:</Form.Label>
              <Form.Label>Comment Text:</Form.Label>
              <Form.Label>Comment Text:</Form.Label>
            </Form.Group>
            )
        })}
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>handleOnClick()}>
            Get Quotes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default GetUserQuotes;