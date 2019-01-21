import React from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import database from './Fire';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    }
  }

  componentWillMount = () => {
    const messageRef = database.ref('messages');
    messageRef.on('child_added', snapShot => {
      const {text, user} = snapShot.val();
      const {key: _id} = snapShot;
      const message = { 
        text, 
        user, 
        _id
      };
      this.setState({
        messages: [message,...this.state.messages ]
      })
    });
  };

  onSend = messages => {
    console.log('.... On Press Send');
    console.log(messages);
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    const { text, user } = messages[0];
    const message = {
      text,
      user
    };
    database.ref('messages').push(message);

  };


  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={this.onSend}
        user={{
          _id: 1,
        }}
      />
    )
  }
}

export default Chat;