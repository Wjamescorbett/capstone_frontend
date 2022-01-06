import React, { Component } from 'react'; 
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar';
import key from './key';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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

    render(){
        console.log(this.state.quote)
        console.log(this.state.quoteOfDay)
    return(
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
        )
    }
}

export default App; 