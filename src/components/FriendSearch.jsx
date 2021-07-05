import Search from 'react-search'
import React, { Component } from 'react'

class FriendsSearch extends Component {

  constructor (props) {
    super(props)
    this.state = { repos: [] }
  }


  HiItems(items) {
    console.log(items)
    this.onTrigger(items)
  }

  onTrigger = (results) => {
      this.props.parentCallback(results);
  }

  getItemsAsync(searchValue, cb) {
    let url = `http://127.0.0.1:8000/Anime_Creator_App/friendssearch/`
    fetch(url, { 
        headers: {
            'Authorization': `JWT ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json',}
        }).then( (response) => {
      return response.json();
    }).then((results) => {
      if(results !== undefined){
        let usernames = results.map( (res, i) => { return { id: i, value: res.username } })
        this.setState({ repos: usernames })
        cb(searchValue)
      }
    });
  }

  render () {
    return (
      <div>
        <Search items={this.state.repos}
                multiple={true}
                getItemsAsync={this.getItemsAsync.bind(this)} 
                onItemsChanged={this.HiItems.bind(this)} />
      </div>
    )
  }
}

export default FriendsSearch;