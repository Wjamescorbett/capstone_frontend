import React, { useState, useEffect, Component } from "react";
import {Form, Button, Container} from 'react-bootstrap';
import Modal from "react-bootstrap/Modal";

const LoadThreeMore = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log("HERE", props.getApiData2)

        return(
            <div>
            {props.getApiData2.map((c) => {
                    return (
                        <div key={Math.random()}>
                            <Modal show={show} onHide={()=>handleClose()}>
                                <Modal.Header closeButton>
                                <Modal.Title>More Quotes!</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[0]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[1]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[3]}</Form.Label>
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Body>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[0]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[1]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[3]}</Form.Label>
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Body>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[0]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[1]}</Form.Label>
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="postedCommentText">
                                    <Form.Label>{c[3]}</Form.Label>
                                    </Form.Group>
                                </Modal.Body>
                                <Modal.Footer>
                                <Button variant="secondary" onClick={()=>handleClose()}>
                                    Cancel
                                </Button>
                                </Modal.Footer>
                            </Modal>
                            
                            </div>
                    )
                    })}
                    <Button variant="primary" onClick={()=>handleShow()}>
                        Access More Quotes
                    </Button>
            
</div>
);
};



export default LoadThreeMore;








//     const handleOnClick = () => {
//             <Container key={Math.random()}><div>
//                 {props.getApiData.map((c) => {
//                     console.log(c)
//                     return (
//                         <div key={Math.random()}>
//                             <h5>Quote Text: {c[0]}</h5>
//                             <h5>Author: {c[1]}</h5>
//                             <h5>Quote Id: {c[2]}</h5>
//                             <h5>Key Word: {c[3]}</h5>
//                             <PostApiComment
//                             addApiComment={props.addApiComment}
//                             currentApiQuoteData={c}
//                             />
//                         </div>
//                     )
//                 }
//                 )}
//             </div></Container>
//         )}
        
// };



