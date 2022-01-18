import React, { useState, useEffect, Component } from "react";
import PostApiComment from "../PostApiComment/PostApiComment";
import {Form, Button, Container} from 'react-bootstrap';


const LoadThreeMore = (props) => {
    
    const showQuotes = () => {
        return(
        <Container key={Math.random()}><div>
        {props.getApiData.map((c) => {
            console.log(c)
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
        }
        )}
    </div></Container>
    )
    }
    return(
        <Container key={Math.random()}><div>
            <Button variant="primary" onClick={()=>{
                showQuotes();
            }}
            >
            Load More Quotes!</Button>
        </div></Container>
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



