import React, { PureComponent } from 'react'

class Message extends PureComponent {

    componentDidUpdate() {
        const objDiv = document.getElementById('messageList');
        objDiv.scrollTop = objDiv.scrollHeight;
      }

    render() {
        const messages = this.props.messages.map((message, i) => {
            return (
              <Message
                key={i}
                username={message.username}
                message={message.message}
                fromMe={message.fromMe} />
            );
          });
        return (
            <div className='messages' id='messageList'>
            { messages }
          </div>
        )
    }
}

export default Message;
