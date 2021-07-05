import React, { Component } from 'react';
import axios from 'axios';


class UploadVideo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            video: null,
            description: null,
            name: null, 
            creator: null,  
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeDescription = this.handleChangeDescription.bind(this);
        this.handleChangeVideo = this.handleChangeVideo.bind(this);
        this.handleChangeCreator = this.handleChangeCreator.bind(this);
    }

    handleChangeName(event) {
        const name = event.target.name;
        this.setState({ 
            ...this.state,
            [name]: event.target.value,
        });
    }


    handleChangeCreator(event) {
        const creator = event.target.name;
        this.setState({ 
            ...this.state,
            [creator]: event.target.value,
        });
    }


    handleChangeDescription(event) {
        const description = event.target.name;
        this.setState({ 
            ...this.state,
            [description]: event.target.value,
        });
    }

    handleChangeVideo(event) {
        const video = event.target.name;
        this.setState({ 
            ...this.state,
            [video]: event.target.files[0]
        });
    }

    handleSubmit(event) {
        const data = new FormData()
        data.append('video', this.state.video)
        data.append('description', this.state.description)
        data.append('name', this.state.name)
        data.append('creator', this.state.creator)
        console.log(data);
        event.preventDefault();
        this.addVideo(data);
    }

    async addVideo(formData) {
        await axios.post(``,formData, {
            headers: {
                Authorization: `JWT ${localStorage.getItem('token')}`,
            }
            
            })
            .then(response => this.setState({
            video: response.data,
            username: this.state.username
            }));
            console.log(this.state.video)
        }

  render() {
    return (
        <div className="uploadForm">
            <form id="UploadForm" name="UploadForm" onSubmit={(event) => this.handleSubmit(event)} encType="multipart/form-data" >
                <label for="name">Enter Name of Video:</label>
                <input type="text" id="name" name="name" onChange={(event) => this.handleChangeName(event)}></input>
                <label for="name">Enter Creator's Name:</label>
                <input type="text" id="creator" name="creator" onChange={(event) => this.handleChangeCreator(event)}></input>
                <label for="description">Enter a description:</label>
                <input type="text" id="description" name="description" onChange={(event) => this.handleChangeDescription(event)}></input>
                <label for="video">Select video:</label>
                <input type="file" id="video" name="video" accept="video/*" onChange={(event) => this.handleChangeVideo(event)} ></input>
                <input type="submit"></input>
            </form>
        </div>
    );
  }
}

export default UploadVideo;
