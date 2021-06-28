import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',       
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const id = this.state.id
        this.props.get_SearchResults(id);
        this.setState({
            id: ''
        })
    }

    render() { 
        return ( 
            <div className='searchContainer'>
            <form onSubmit={this.handleSubmit}>
                <input type='text' name='id' value={this.state.id} onChange={this.handleChange} placeholder='Enter Search'  className='searchField' />
                <input type='submit' value='Search' className='searchBtn' />
            </form>
            </div>
         );
    }
}
 
export default SearchBar;