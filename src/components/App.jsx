import React, { Component } from 'react'; 
import axios from 'axios';
import key from './key';
import Login from './Login/Login';
import Home from './Home/Home';
import Register from './Register/Register'
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
        }
    }

    componentDidMount(){
        // this.addPostedQuote()
        // this.getQuoteOfDay()
    }

    getSearch = async(search) => {
        // get response from public api
        // get response from backend api
        // combine arrays
        // save arrays to state
        this.state.postedQuoteId = []
        this.state.getSearchData = []
        this.state.getApiData = []
        await axios.get(`https://quotes.rest/quote/search?author=${search}&language=en&limit=3&api_key=${key}`).then(response => {
            if(response.ok){
                console.log("Fixing 404")
            }
            for(let index = 0; index < response.data.contents.quotes.length; index++){
                this.state.getApiData.push(response.data.contents.quotes[index])
            }
        })
        await axios.get('http://127.0.0.1:8000/api/postedQuote/allQuotes/').then(response => {
            for(let index = 0; index < response.data.length; index++){
                if(response.data[index].author === search){
                    this.state.getSearchData.push(response.data[index])
                }
            }
            console.log("this is what i need", this.state.getSearchData)
        })
        this.setState({
            getApiData: [[this.state.getApiData[0].quote, this.state.getApiData[0].author, this.state.getApiData[0].id, this.state.getApiData[0].tags[0]], [this.state.getApiData[1].quote, this.state.getApiData[1].author, this.state.getApiData[1].id, this.state.getApiData[1].tags[1]], [this.state.getApiData[2].quote, this.state.getApiData[2].author, this.state.getApiData[2].id, this.state.getApiData[2].tags[2]]]
        })
        console.log(this.state.getApiData)
    }

    // [[1,5],[2,3],[4,6,7]]

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