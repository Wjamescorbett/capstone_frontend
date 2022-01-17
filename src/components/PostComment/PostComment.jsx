import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import jwtDecode from "jwt-decode";

const PostComment = (props) => {
  const postedQuote = props.currentQuoteData.id
  const [commentText, setCommentText] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    console.log(jwtDecode(localStorage.getItem('access')))
    let postedComment = {
      postedQuote: postedQuote,
      commentText: commentText,
    user:jwtDecode(localStorage.getItem('access')).user_id
    }
    props.addPostedComment(postedComment);
    handleClose();
  }


  return (
    <div>
      <Button variant="primary" onClick={()=>handleShow()}>
        Comment
      </Button>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Post Comment</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postedCommentText">
              <Form.Label>Comment Text:</Form.Label>
              <Form.Control type="text" onChange={e => setCommentText(e.target.value)}required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleOnClick()}>
            Submit Comment
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostComment;