import React, { Component } from 'react';
import axios from 'axios';
import VideoDetail from './video_detail';
import VideoList from './video_list';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '',
                    project: {},
                   };
  }

  onInputChange(term) {
    this.setState({ term });
  }

  async get_project() {
    try{
      let response = await axios.get(`https://api.wistia.com/v2/projects.json?access_token=aef6980d1a631cbcdd9e34c954c9b0a0a0f949bbcc8851daa95b07c6148d3acd`, {
      })
      console.log(response.data)
      this.setState({
          project: response.data,
          term: this.state.term
      });
      console.log(this.state.project)
  } catch (er){
      console.log('ERROR in get_project', er)
  }
  }

  async get_SearchResults(term, project) {
    
    try{
        let response = await axios.get(`https://api.wistia.com/v2/medias.json?access_token=aef6980d1a631cbcdd9e34c954c9b0a0a0f949bbcc8851daa95b07c6148d3acd&project_id=${project.id}`, {
        body: {
          name: term
        }
        })
        console.log(response.data)
        this.setState({
            search_results: response.data,
            project: this.state.project
        });
    } catch (er){
        console.log('ERROR in get_SearchResults', er)
    }

}

componentDidMount() {
  this.get_project();
}

handleSubmit(event) {
  event.preventDefault();
  this.get_SearchResults(this.state.term, this.state.project.data[0])
}

  render() {
    return (
      <div>
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
          {this.state.search_results ? <div> <VideoDetail search_results={this.state.search_results} thumbnailUrl={this.state.search_results.data[0].relationships.thumbnail.data.id} />
          {console.log(this.state.search_results.data[0].attributes.url)}
          <VideoList
          onVideoSelect={search_results => this.setState({ search_results })}
          videoAttributes={this.state.search_results.data[0].attributes}
        /></div>: undefined}
          
      </div>
    );
  }
}

export default SearchBar;
