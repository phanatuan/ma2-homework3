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

  // componentWillMount = () => {

  //   const messageRef = database.ref('messages');
  //   console.log(' ..... Message Ref');
  //   console.log(messageRef);
  //   messageRef.on('child_added', snapShot => {
  //     console.log('..... Snapshot');
  //     console.log(snapShot.val);
  //   });
  // };

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