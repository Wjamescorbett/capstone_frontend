import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import jwtDecode from "jwt-decode";

const PostApiComment = (props) => {
  const apiQuote = props.currentApiQuoteData[2];
  const [commentText, setCommentText] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    console.log(jwtDecode(localStorage.getItem('access')))
    console.log(props.currentApiQuoteData)
    let apiComment = {
      apiQuote: apiQuote,
      commentText: commentText,
    user:jwtDecode(localStorage.getItem('access')).user_id
    }
    props.addApiComment(apiComment);
    handleClose();
  }


                        // <h5>Quote Text: {c[0]}</h5>
                        // <h5>Author: {c[1]}</h5>
                        // <h5>Quote Id: {c[2]}</h5>
                        // <h5>Key Word: {c[3]}</h5>

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

export default PostApiComment;