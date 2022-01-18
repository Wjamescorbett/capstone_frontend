import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import jwtDecode from "jwt-decode";

const DeleteComment = (props) => {

    const  handleOnClick = () => {
        console.log("CommentId is:", props.currentCommentData.user)
        let isUser = {
        user:jwtDecode(localStorage.getItem('access')).user_id
        }
        console.log("UserId is:", isUser.user)
        if(isUser.user === props.currentCommentData.user){
            let deleteComment = props.currentCommentData.id
            props.deletePostedComment(deleteComment);
        }
    }

    return (
    <div>
        <Button variant="primary" onClick={()=>handleOnClick()}>
            Delete Comment
        </Button>
    </div>
    );
};

export default DeleteComment;