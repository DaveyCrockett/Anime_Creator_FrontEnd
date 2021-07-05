import axios from "axios";
import React, {Component} from "react";
import FriendsSearch from "./FriendSearch";
import './App.css';
const API_BASE = "http://127.0.0.1:8000/Anime_Creator_App/friends/";

class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = { comrade: [], usernames: {}, }
    }

    handleCallback = (childData) => {
        let mapHelper = childData.map((data) => {return data.value})
        this.setState({friends: {friend: mapHelper.toString(),
                                  username: this.props.currentUser}})
      }

    

    handleSubmit = event => {
        event.preventDefault();
        var friendsTemp = this.state.comrade;
        fetch(API_BASE, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Authorization": `JWT ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(this.state.friends)
          })
            .then(res => res.json())
            .then(response => {
              friendsTemp.push(response)
              this.setState({ comrade: friendsTemp })
            })
    }


    async listOfFriends(){
    try{
        let response = await axios.get(API_BASE, {
          headers: {
            Authorization: `JWT ${localStorage.getItem('token')}`
          }
        })
        this.setState({
          comrade: response.data,
      });
      }
      catch (er){
        console.log('ERROR in listOfFriends', er)
    }
  }

  componentDidMount(){
    this.listOfFriends();
  }

    render() {
        return (
            <div className="main">
                <div className="mainDiv">
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <h3>Enter a Friend!</h3>
                    <fieldset className="form-group">
                      <label>Friend's Username:</label>
                      <FriendsSearch parentCallback={this.handleCallback} />
                    </fieldset>
                    <button className="btn btn-success" type="submit">
                      Save Friend
                    </button>
                  </form>
                  <ul>
                    {this.state.comrade.map((friend) => {
                      return <li className="friendList" key={friend.id}>{friend.friend}</li>
                    })}
                  </ul>
                  
                </div>
            </div>
        );
    }
}

export default FriendList;