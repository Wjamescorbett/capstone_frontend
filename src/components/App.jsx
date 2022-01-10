import React, { Component } from 'react'; 
import axios from 'axios';
// import SearchBar from './SearchBar/SearchBar';
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
            quoteOfDay: '',
            quote: '',
            author: '',
            quoteAuthor: '',
            randomQuote: '',
            randomQuoteAuthor: ''
        }
    }


    componentDidMount(){
        this.getQuoteOfDay()
    }    

    async getQuoteOfDay(){
        let response = await axios.get("https://quotes.rest/qod?language=en")
        console.log(response.data.contents.quotes[0].author)
        this.setState({
            quoteOfDay: response.data.contents.quotes[0].quote,
            author: response.data.contents.quotes[0].author
        })
    }

    getSearch = async(search) => {
        // get response from public api
        // get response from backend api
        // combine arrays
        // save arrays to state
        let response = await axios.get(`https://quotes.rest/quote/search?author=${search}&api_key=${key}`)
        //let quoteArray = response.data.contents.quotes
        //push quotes from backend search into quoteArray
        this.setState({
            quote: response.data.contents.quotes[0].quote,
            quoteAuthor: response.data.contents.quotes[0].author
        })
    }

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
                                getQuoteOfDay={this.getQuoteOfDay}
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







{/* <div>
        <div className="wrapper">
            <div className="header">
                <h1>"QuoteShare"</h1>
                    <SearchBar startSearch={this.getSearch}/>
            </div>
            <div className="row">
                <div className="qodBox">
                    <h5 className="qodHeader">Here is the Quote of the Day!</h5>
                    <h2>{this.state.quoteOfDay}</h2>
                    <h4>{this.state.author}</h4>
                </div>
                <div className="qodBox">
                    <h2>{this.state.quote}</h2>
                    <h4>{this.state.quoteAuthor}</h4>
                </div>
                <div className="qodBox">
                    <button className="randomButton" onClick={this.randomQuote}>Get a Random Quote!</button>
                    <h2>{this.state.randomQuote}</h2>
                    <h4>{this.state.randomQuoteAuthor}</h4>
                </div>
            </div>
        </div>
    </div> */}
