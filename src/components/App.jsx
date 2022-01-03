import React, { Component } from 'react'; 
import axios from 'axios';
import key from './key'
import './App.css'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quoteOfDay: '',
            author: ''
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


    render(){
        console.log(this.state.quoteOfDay)
    return(
        <div>
            <div className="header">
                <h1>QuoteShare----</h1>
            </div>
            <div className="row">
                <div className="col-8">
                    <h2>{this.state.quoteOfDay}</h2>
                    <h4>{this.state.author}</h4>
                </div>
            </div>
        </div>
        )
    }
}

export default App; 