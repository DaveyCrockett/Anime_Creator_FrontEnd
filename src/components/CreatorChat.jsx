import React, { useEffect } from 'react';
import { Widget, addResponseMessage } from 'react-chat-widget';

import 'react-chat-widget/lib/styles.css';


function CreatorChat() {
  useEffect(() => {
    addResponseMessage('Given response. Hello World!');
  }, []);

  const handleNewUserMessage = (newMessage) => {
    console.log(`New message incoming! ${newMessage}`);
  };

    return (
      <div className="App">
        <Widget
          handleNewUserMessage={handleNewUserMessage}
          profileAvatar='Blank'
          title="My new awesome title"
          subtitle="And my cool subtitle"
        />
      </div>
    );
}

export default CreatorChat;