import React, { Component, useState } from 'react'; 
import axios from 'axios';
import key from './key';
import Login from './Login/Login';
import Home from './Home/Home';
import {Form, Button, Container} from 'react-bootstrap';
import Register from './Register/Register';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            quoteOfDay: '',
            quote: '',
            author: '',
            quoteAuthor: '',
            randomQuote: '',
            randomQuoteAuthor: '',
            search: '',
            quoteSearch: [],
            authorSearch: [],
            author2: '',
            getSearchData: [],
            comments: [],
            getCommentData: [],
            getApiData: [],
            getApiDataTest: [],
            getApiCommentData: [],
        }
        console.log("STATE", this.state.getSearchData)
    }

    componentDidMount(){
        // this.addPostedQuote()
        // this.getQuoteOfDay()
    }



    getSearch = async(search) => {
        this.state.postedQuoteId = []
        this.state.getApiData = []
        try{
            
        await axios.get(`https://quotes.rest/quote/search?author=${search}&language=en&limit=3&api_key=${key}`).then(response => {
                for(let index = 0; index < response.data.contents.quotes.length; index++){
                    this.state.getApiData.push(response.data.contents.quotes[index])
            }
            this.setState({
                getApiData: [[this.state.getApiData[0].quote, this.state.getApiData[0].author, this.state.getApiData[0].id, this.state.getApiData[0].tags[0]], [this.state.getApiData[1].quote, this.state.getApiData[1].author, this.state.getApiData[1].id, this.state.getApiData[1].tags[1]], [this.state.getApiData[2].quote, this.state.getApiData[2].author, this.state.getApiData[2].id, this.state.getApiData[2].tags[2]]]
            })
        })
        } catch {console.log("Passed API search")}
        
        await axios.get('http://127.0.0.1:8000/api/postedQuote/allQuotes/').then(response => {
            let holderForSearchData = []
            let catchFix = [["Place Holder Text", "Place Holder Author", 100000 , "Place Holder Keyword"], ["Place Holder Text", "Place Holder Author", 100000 , "Place Holder Keyword"],["Place Holder Text", "Place Holder Author", 100000 , "Place Holder Keyword"]]
            for(let index = 0; index < response.data.length; index++){
                if(response.data[index].author === search){
                    if(response.data[index].quoteText === undefined || response.data[index].author === undefined || response.data[index].id === undefined || response.data[index].keyWord === undefined){
                        continue;
                    } else {   holderForSearchData.push(response.data[index])
                        console.log("SEE THIS", response.data[index])
                    }
                }
            }
            try{
                this.setState({
                    getSearchData: [[holderForSearchData[0].quoteText, holderForSearchData[0].author, holderForSearchData[0].id, holderForSearchData[0].keyWord], [holderForSearchData[1].quoteText, holderForSearchData[1].author, holderForSearchData[1].id, holderForSearchData[1].keyWord], [holderForSearchData[2].quoteText, holderForSearchData[2].author, holderForSearchData[2].id, holderForSearchData[2].keyWord]]
                })
            } catch {
                this.setState({
                    getSearchData: catchFix
                })
            }
        holderForSearchData = []
        this.loadThreeMore()
    })
    }
    

// POSTED REQUESTS

    addPostedComment = async (postedComment) => {
        console.log(postedComment)
        await axios.post("http://127.0.0.1:8000/api/postedComment/postedComment/", postedComment, {headers:{Authorization: "Bearer " + localStorage.getItem('access')}})
    }

    getAllComments = async () => {
        this.state.getCommentData = []
        await axios.get('http://127.0.0.1:8000/api/postedComment/allComments/').then(response => {
            for(let index = 0; index < response.data.length; index++){
                this.state.getCommentData.push(response.data[index])
            }
        })
        console.log(this.getCommentData)
    }


// API REQUESTS

    addApiComment = async (apiComment) => {
        console.log(apiComment)
        await axios.post("http://127.0.0.1:8000/api/postedComment/apiComment/", apiComment, {headers:{Authorization: "Bearer " + localStorage.getItem('access')}})
    }



    getAllApiComments = async () => {
        this.state.getApiCommentData = []
        await axios.get('http://127.0.0.1:8000/api/postedComment/allApiComments/').then(response => {
            for(let index = 0; index < response.data.length; index++){
                this.state.getApiCommentData.push(response.data[index])
            }
        })
        console.log(this.getApiCommentData)
    }

// GET USER

    getUser = async () => {
        const jwtToken = localStorage.getItem("access");
        try {
            var results = await axios({
                method: 'GET',
                url: 'http://127.0.0.1:8000/api/auth/login/',
                headers: {Authorization: `Bearer ${jwtToken}`},
            });
            console.log(results.data)
            this.setState({
                user: results.data
            })
        } catch (e) {
            console.log(e);
        }    
    }

// ADD POSTED QUOTE

    addPostedQuote = async (postedQuote) => {
        await axios.post("http://127.0.0.1:8000/api/postedQuote/postedQuote/", postedQuote, {headers:{Authorization: "Bearer " + localStorage.getItem('access')}})
        // this.setToggle();
    };

    // async getQuoteOfDay(){
    //     let response = await axios.get("https://quotes.rest/qod?language=en")
    //     console.log(response.data.contents.quotes[0].author)
    //     this.setState({
    //         quoteOfDay: response.data.contents.quotes[0].quote,
    //         author: response.data.contents.quotes[0].author
    //     })
    // }

    randomQuote = async() => {
        let response = await axios.get(`https://quotes.rest/quote/random?language=en&limit=1&api_key=${key}`)
        this.setState({
            randomQuote: response.data.contents.quotes[0].quote,
            randomQuoteAuthor: response.data.contents.quotes[0].author
        })
    }

    registerUser = async (user) => {await axios ({
        method: "POST",
        url: 'http://127.0.0.1:8000/api/auth/register/',
        data: {
            username: user.username,
            password: user.password,
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            middle_name: user.middle_name,
            prefix: user.prefix,
        },
    });
    console.log(user);
    }

    logout = () => {
        localStorage.clear();
        window.location.href = "/";
    }

    loadThreeMore = () => {
        return(
            <Button variant="primary">Load More Quotes!</Button>
        )
    }

    render() {
        return (
            <Router>
                <Routes>
                    <Route exact path="/" element={
                        !localStorage.getItem('access') ?
                            <Login 
                                login={this.login} 
                            />
                        :
                            <Home 
                                quoteOfDay={this.state.quoteOfDay}
                                logout={this.logout}
                                getSearch={this.getSearch}
                                addPostedQuote={this.addPostedQuote}
                                addPostedComment={this.addPostedComment}
                                userId={this.state.user}
                                quote={this.state.quote}
                                author={this.state.author}
                                quoteSearch={this.state.quoteSearch}
                                authorSearch={this.state.authorSearch}
                                user={this.user}
                                search={this.state.search}
                                getSearchData={this.state.getSearchData}
                                getAllComments={this.getAllComments}
                                getCommentData={this.state.getCommentData}
                                getApiData={this.state.getApiData}
                                addApiComment={this.addApiComment}
                                getAllApiComments={this.getAllApiComments}
                                loadThreeMore={this.loadThreeMore}
                            />
                        }
                    />
                    <Route path="/register" element={
                        <Register 
                            registerUser={this.registerUser}
                        />}
                    />          
                </Routes>
            </Router>
        )
    } 
}

export default App; 