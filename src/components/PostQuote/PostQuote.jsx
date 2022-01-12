import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import jwtDecode from "jwt-decode";

const PostQuote = (props) => {
  const [quoteText, setQuoteText] = useState();
  const [author, setAuthor] = useState();
  const [keyWord, setKeyword] = useState();
  const [comments,setComments] = useState();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const  handleOnClick = () => {
    console.log(jwtDecode(localStorage.getItem('access')))
    let postedQuote = {
    quoteText: quoteText,
    author: author,
    keyWord: keyWord,
    comments: comments,
    user:jwtDecode(localStorage.getItem('access')).user_id
    }
    props.addPostedQuote(postedQuote);
    handleClose();
  }

  return (
    <div>
      <Button variant="primary" onClick={()=>handleShow()}>
        Post A Quote
      </Button>
      <Modal show={show} onHide={()=>handleClose()}>
        <Modal.Header closeButton>
          <Modal.Title>Quote Details:</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="postedQuoteText">
              <Form.Label>Quote Text:</Form.Label>
              <Form.Control type="text" onChange={e => setQuoteText(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="postedQuoteAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control type="text" onChange={e => setAuthor(e.target.value)}required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="postedQuoteKeyword">
              <Form.Label>Keyword</Form.Label>
              <Form.Control type="text" onChange={e => setKeyword(e.target.value)} required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="postedComments">
              <Form.Label>Comments</Form.Label>
              <Form.Control type="text" onChange={e => setComments(e.target.value)} required/>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={()=>handleClose()}>
            Cancel
          </Button>
          <Button variant="primary" onClick={()=>handleOnClick()}>
            Submit Quote
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PostQuote;