import React, { Component } from 'react';
import axios from 'axios';


class DeleteVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
        }
    }

    handleSubmit(event) {
    
        event.preventDefault();
        this.removeVideo();
    }


    async removeVideo() {     

        await axios.delete(`https://upload.wistia.com?access_token=ddb75193bc84dd96ae0139858aeb5c4c44a8e189cae04dccc4362a8ecc0e9fce&project_id=gil6c4acn6&url=${this.props.videoUrl}`, {
            headers: {'Content-Type': 'multipart/form-data',},
        })
            .then(response => this.setState({
                video: response.data,
                username: this.state.username
            }));
            console.log(this.state.video)
        }

  render() {
    return (
        <div className="deleteVideo">
            <form onSubmit={(event) => this.handleSubmit(event)}>
                <button type="submit">DELETE</button>
            </form>    
        </div>
    );
  }
}

export default DeleteVideo;
