import React, { Component } from 'react'; 
import {Form, Button, Container} from 'react-bootstrap';
import PostComment from '../PostComment/PostComment';
import 'bootstrap/dist/css/bootstrap.css';

const HomeBody = (props) => {
    
    return (
        <div>
            {props.getApiData.map((c) => {
                return (
                    <div>
                        <h5>{c[0]}</h5>
                        <h5>{c[1]}</h5>
                    </div>
                )
            }
            )}

            <h1>-------------------------------------------</h1>
            
            {props.getSearchData.map(e => {
                return (
                    <div>
                        <h5>{e.quoteText}</h5>
                        <h5>{e.author}</h5>
                        <h5>Comment Id: {e.id}</h5>
                        <PostComment 
                            addPostedComment={props.addPostedComment}
                            currentQuoteData={e}
                        />
                        {props.getCommentData.map((q) => {
                            if(q.postedQuote === e.id){
                                console.log("We got here -----------------------------")
                                return(
                                    <div>
                                        <h5>"Comments Go Here"</h5>
                                        <h5>{q.commentText}</h5>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div>
                )
            }
            )}
        </div>
    )
}

export default HomeBody;