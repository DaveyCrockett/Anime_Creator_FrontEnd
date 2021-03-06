import React, { Component } from 'react';
import Nav from './nav';
import LoginForm from './LoginForm';
import SignupForm from './SignupForm';
import './App.css';
import UploadVideo from './UploadVideo';
import FriendList from './FriendsList';
import Search from './Search';
import CreatorChat from './CreatorChat';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayed_form: '',
      logged_in: localStorage.getItem('token') ? true : false,
      username: '',
      search_results: null,
      name: '',
      id: '',
    };
  }

 

 
  

  componentDidMount() {
    if (this.state.logged_in) {
      fetch('http://127.0.0.1:8000/Anime_Creator_App/current_user/', {
        headers: {
          Authorization: `JWT ${localStorage.getItem('token')}`
        }
      })
        .then(res => res.json())
        .then(json => {
          this.setState({ username: json.username,
                          id: json.id});
        });
    }
  }

  handle_login = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/token-auth/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.user.username
        });
      });
  };

  handle_signup = (e, data) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/Anime_Creator_App/users/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(json => {
        localStorage.setItem('token', json.token);
        this.setState({
          logged_in: true,
          displayed_form: '',
          username: json.username,
        });
      });
  };

  handle_logout = () => {
    localStorage.removeItem('token');
    this.setState({ logged_in: false, username: '' });
  };

  display_form = form => {
    this.setState({
      displayed_form: form
    });
  };

  render() {
    let form;
    switch (this.state.displayed_form) {
      case 'login':
        form = <LoginForm handle_login={this.handle_login} />;
        break;
      case 'signup':
        form = <SignupForm handle_signup={this.handle_signup} />;
        break;
      default:
        form = null;
    }

    return (
      <div className="App">
        <div className="center">
            {form}
        </div>
        <div className="nav">
            <h3>
                {this.state.logged_in
                    ? `Hello, ${this.state.username}`
                    : 'Please Log In or Sign Up'}
            </h3>
            <Nav
            logged_in={this.state.logged_in}
            display_form={this.display_form}
            handle_logout={this.handle_logout}
            />
        </div>
        <div className="search">
            {this.state.logged_in ? <div><Search /></div> : null}
        </div>
        {this.state.logged_in ? <div className="uploadVideo"><UploadVideo currentUser={this.state.username} /></div> : null}
          {this.state.logged_in ? <div className="listOfFriends"><FriendList currentUser={this.state.username} /></div>: null}
          {this.state.logged_in ? <div className="creatorChat"><CreatorChat /></div>:null}
      </div>
    );
  }
}

export default App;