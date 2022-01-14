import React, { Component } from 'react'; 
import axios from 'axios';
import key from '../key';
import './SearchBar.css';
import {Form, Button, Container} from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            quote: [],
            author: [],
            quote2: [],
            author2: ''
        }
    }

    getSearch = async(search) => {
        // get response from public api
        // get response from backend api
        // combine arrays
        // save arrays to state
        let response = await axios.get(`https://quotes.rest/quote/search?author=${search}&api_key=${key}`)
        let response2 = await axios.get(`https://quotes.rest/quote/search?author=${search}&api_key=${key}`)
        await axios.get('http://127.0.0.1:8000/api/postedQuote/allQuotes/').then(response => {
            for(let index = 0; index < response.data.length; index++){
                if(response.data[index].author === search){
                    console.log("ThisRan")
                    this.state.quote2.push(response.data[index].quoteText)
                }
            }
        })
        //let quoteArray = response.data.contents.quotes
        //push quotes from backend search into quoteArray
        this.setState({
            quote: [...this.state.quote, ...[response.data.contents.quotes[0].quote, response2.data.contents.quotes[0].quote]],
            author: response.data.contents.quotes[0].author
        })
        console.log(this.state.quote2)
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state.search)
        this.getSearch(this.state.search)
        this.setState({
            search: ''
        })
    }

    render() { 
        return (
            <div className="searchbar">
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Label>Backend Quotes</Form.Label>
                    <Form.Control name="search" value={this.state.search} onChange={this.handleChange}></Form.Control>
                    <Button type="submit" className="searchButton">🔍</Button>
                </Form>
            </div>
            {/* <input value={this.state.search} name="search" onChange={this.handleChange}></input>
            <button className="searchbutton" onClick={() => this.handleSubmit(this.state.search)}>🔍</button> */}

            <h5>{this.state.quote[0]}</h5>
            <h5>{this.state.author}</h5>
            <h5>{this.state.quote[1]}</h5>
            <h5>{this.state.author}</h5>
            ------------------------------------------
            <h5>"TEST GOES HERE"</h5>
            {this.state.quote2.map(e => {
                return (
                    <h5>{e}</h5>
                )
            }
            )}
            <h5>"Under Text Quote"</h5>
            </div>
        )
    }
}

export default SearchBar;