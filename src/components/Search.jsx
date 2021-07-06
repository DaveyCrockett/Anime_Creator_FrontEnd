import React, { Component } from 'react';
import SearchBar from './search_bar';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class Search extends Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      videos: [],
      selectedVideo: null
      
    };
  }

  //videoSearch(term) {
    //this.props.search_results(term)
   // this.setState({
      //videos: this.state.search_results,
     // selectedVideo: this.state.search_results[0]
    //});
    //}

  render() {

    return (
      <div>
        <h5>Youtube Search:</h5><SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

export default Search;
