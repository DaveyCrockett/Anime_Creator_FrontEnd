import React, { Component } from 'react'

class DirectMessagenger extends Component {


    render() {
        return (
        <div className="container">
            <h3>React Chat App</h3>
            <Messages messages={this.state.messages} />
            <ChatInput onSend={this.sendHandler} />
        </div>
        )
    }
}

export default DirectMessagenger;
