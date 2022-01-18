import React, { Component } from 'react'; 
import {Form, Button, Container} from 'react-bootstrap';
import PostApiComment from '../PostApiComment/PostApiComment';
import 'bootstrap/dist/css/bootstrap.css';

const LoadThreeReturn = (props) => {

return (
       <Container key={Math.random()}><div>
              {props.getApiData2.map((c) => {
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
                            </div>
                            )
                     })}
       </div></Container>
);
};

export default LoadThreeReturn;