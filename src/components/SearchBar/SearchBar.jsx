import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import './SearchBar.css';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: ''
        }
    }
    

    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit() {
        console.log(this.state.search)
        this.props.getSearch(this.state.search)
        this.props.getAllComments()
        this.setState({
            search: ''
        })
    }

    render() { 
        return (
            <div className="searchbar">
            <input value={this.state.search} name="search" onChange={this.handleChange}></input>
            <button className="searchbutton" onClick={() => this.handleSubmit(this.state.search)}>🔍</button>
            </div>
        )
    }
}

export default SearchBar;