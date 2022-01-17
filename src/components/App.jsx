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
            user: '',
            quoteOfDay: '',
            quote: '',
            author: '',
            quoteAuthor: '',
            randomQuote: '',
            randomQuoteAuthor: ''
        }
    console.log(this.quote)
    }


    componentDidMount(){
        this.addPostedQuote()
        this.getQuoteOfDay()
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

    async getQuoteOfDay(){
        let response = await axios.get("https://quotes.rest/qod?language=en")
        console.log(response.data.contents.quotes[0].author)
        this.setState({
            quoteOfDay: response.data.contents.quotes[0].quote,
            author: response.data.contents.quotes[0].author
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
                                userId={this.user}
                                quote={this.quote}
                                author={this.author}
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




