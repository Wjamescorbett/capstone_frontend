import React from "react";
import {useState , useEffect} from "react";
import NavBar from "../NavBar/NavBar";
import SearchBar from "../SearchBar/SearchBar";
import PostQuote from "../PostQuote/PostQuote";
import HomeBody from "../HomeBody/HomeBody";
import LoadThreeMore from "../LoadThreeMore/LoadThreeMore";
import './Home.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from "axios";


const Home = (props) => {

return (
    <div className="background">
        <div className="background col-lg-9 text-center">
            <NavBar
                logout={props.logout}
                user={props.userId}
            />
            <h5>This is the Home Page</h5>
            <h5>QOD: {props.quoteOfDay}</h5>
            <SearchBar
                getSearch={props.getSearch}
                getAllComments={props.getAllComments}
                loadThreeMore={props.loadThreeMore}
            />
            <LoadThreeMore
                getApiData={props.getApiData}
                getApiData2={props.getApiData2}
                addApiComment={props.addApiComment}
            />
            <HomeBody
                quote={props.quote}
                author={props.author}
                user={props.userId}
                search={props.search}
                quoteSearch={props.quoteSearch}
                authorSearch={props.authorSearch}
                setState={props.setState}
                postedQuoteId={props.postedQuoteId}
                getSearchData={props.getSearchData}
                addPostedComment={props.addPostedComment}
                getAllComments={props.getAllComments}
                getCommentData={props.getCommentData}
                getApiData={props.getApiData}
                getApiData2={props.getApiData2}
                addApiComment={props.addApiComment}
                getAllApiComments={props.getAllApiComments}
                loadThreeMore={props.loadThreeMore}
                getQuotesFromUser={props.getQuotesFromUser}
                allUserQuotes={props.allUserQuotes}
                deletePostedQuote={props.deletePostedQuote}
                deletePostedComment={props.deletePostedComment}
            />
            <PostQuote 
                addPostedQuote={props.addPostedQuote}
                user={props.userId}
            />

        </div>
    </div>
  );
};

export default Home;





// const [qod, setQuoteOFDay] = useState([])


//   useEffect(() =>{
//     getQuoteOfDay();
//   },[props.toggle])

//   const getQuoteOfDay = async () => {
//     var results = await axios ({
//         method: 'GET',
//         url : "https://quotes.rest/qod?language=en",
//     })
//     console.log(results.data);
//     setQuoteOFDay(results.data)
//   }