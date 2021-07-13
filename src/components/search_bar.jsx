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
    this.videoSelect = this.videoSelect.bind(this);
    this.get_SearchResults = this.get_SearchResults.bind(this);
    this.get_project = this.get_project.bind(this);
    this.handleClick = this.handleClick.bind(this);
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
            project: this.state.project,
            term: this.state.term
        });
        for (let index = 0; index < this.state.search_results.data.length; index++){
          if (this.state.search_results.data[index].attributes.name.includes(this.state.term)){
            console.log(this.state.search_results.data[index].id)
            this.videoSelect(this.state.search_results.data[index].id, this.state.term)
          }
        }
    } catch (er){
        console.log('ERROR in get_SearchResults', er)
    }

}

async videoSelect(hashedId, term) {
  try{
    let response = await axios.get(`https://api.wistia.com/v2/medias/${hashedId}.json?access_token=aef6980d1a631cbcdd9e34c954c9b0a0a0f949bbcc8851daa95b07c6148d3acd`, {
    body: {
      name: term
    }
    })
    console.log(response.data)
    this.setState({
        selectedVideo: response.data,
        project: this.state.project,
        search_results: this.state.search_results
    });
    console.log(this.state.selectedVideo.data)
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

handleClick(video) {
  
  this.setState({
    selectedVideo: video,
    search_results: this.state.search_results
  })
  console.log(this.state.selectedVideo)
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
      {console.log(this.state.selectedVideo)}
          {this.state.selectedVideo ? <div> <VideoDetail search_results={this.state.search_results}  selectedVideo={this.state.selectedVideo.data} videoUrl={this.state.selectedVideo.data.id} />
          <VideoList
          video={this.state.selectedVideo}
          thumbnailUrl={this.state.selectedVideo.data.relationships.thumbnail.data.id}
          handleClick={this.handleClick}
        /></div>: undefined}
          
      </div>
    );
  }
}

export default SearchBar;
