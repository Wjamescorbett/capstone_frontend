import React, { Component } from 'react'; 
import {Form, Button, Container} from 'react-bootstrap';
import PostComment from '../PostComment/PostComment';
import 'bootstrap/dist/css/bootstrap.css';

const HomeBody = (props) => {

    return (
        <div>
        {/* <input value={this.state.search} name="search" onChange={this.handleChange}></input>
        <button className="searchbutton" onClick={() => this.handleSubmit(this.state.search)}>🔍</button> */}
        
        <h5>{props.quoteSearch[0]}</h5>
        <h5>{props.authorSearch}</h5>
        <h5>{props.quoteSearch[1]}</h5>
        <h5>{props.authorSearch}</h5>
        ------------------------------------------
        {props.getSearchData.map((e) => {
            return (
                <div>
                    <h5>{e.quoteText}</h5>
                    <h5>{e.author}</h5>
                    <h5>Comment Id: {e.id}</h5>
                    {console.log(props.getCommentData)}
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