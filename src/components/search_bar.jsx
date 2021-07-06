import React, { Component } from 'react';
import axios from 'axios';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
  }

  onInputChange(term) {
    this.setState({ term });
  }

  async get_SearchResults(term) {
    
    try{
        let response = await axios.get(`http://127.0.0.1:8000/Anime_Creator_App/videos/${term}`, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        this.setState({
            search_results: response.data,
        });
    } catch (er){
        console.log('ERROR in get_SearchResults', er)
    }

}

handleSubmit(event) {
  event.preventDefault();
  this.get_SearchResults(this.state.term)
}

  render() {
    return (
      <div className="search-bar" style={{margin: "20px", textAlign: "center"}}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)}
            style = {{ width: "75%" }}
            />
            <button type="submit">Search</button>
          </form>
        
      </div>
    );
  }
}

export default SearchBar;
