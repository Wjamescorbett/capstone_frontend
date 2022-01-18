import React, { Component } from 'react'; 
import {Form, Button, Container} from 'react-bootstrap';
import PostComment from '../PostComment/PostComment';
import PostApiComment from '../PostApiComment/PostApiComment';
import GetUserQuotes from '../GetUserQuotes/GetUserQuotes';
import 'bootstrap/dist/css/bootstrap.css';

const HomeBody = (props) => {


    return (
        <Container key={Math.random()}><div>
            {props.getApiData.map((c) => {
                return (
                    <div key={Math.random()}>
                        <h5>Quote Text: {c[0]}</h5>
                        <h5>Author: {c[1]}</h5>
                        <h5>Quote Id: {c[2]}</h5>
                        <h5>Key Word: {c[3]}</h5>
                        <PostApiComment
                        addApiComment={props.addApiComment}
                        currentApiQuoteData={c}
                        />
                        <Button variant="primary">Favorite Quote</Button>
                    </div>
                )
            })
            }
            <h1>-------------------------------------------</h1>
            
            {props.getSearchData.map(e => {
                // console.log(e)
                // console.log(props.postedQuote)
                return (
                    <Container key={Math.random()}><div key={Math.random()}>
                        <h5>Quote Text: {e[0]}</h5>
                        <h5>Author: {e[1]}</h5>
                        <h5>Key Word: {e[3]}</h5>
                        <h5>Comment Id: {e[2]}</h5>
                        <PostComment 
                            addPostedComment={props.addPostedComment}
                            currentQuoteData={e}
                        />
                        <GetUserQuotes
                            getQuotesFromUser={props.getQuotesFromUser}
                            currentQuoteData={e}
                            allUserQuotes={props.allUserQuotes}
                        />
                        <Button variant="primary">Delete Comment</Button>
                        <Button variant="primary">Favorite Quote</Button>
                        {props.getCommentData.map((q) => {
                            if(q.postedQuote === e[2]){
                                return(
                                    <div key={Math.random()}>
                                        <h5>"Comments Go Here"</h5>
                                        <h5>{q.commentText}</h5>
                                    </div>
                                )
                            }
                        }
                        )}
                    </div></Container>
                )
            }
            )}
        </div></Container>
    );
};

export default HomeBody;