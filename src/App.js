import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import RoomList from './components/RoomList';

import {instanceLocator, tokenUrl} from './config';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import '@atlaskit/css-reset';
import './styles/index.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: []
        };
        this.sendMessage = this.sendMessage.bind(this);
    }
    componentDidMount(){
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: 'Perborgen',
            tokenProvider: new TokenProvider({ 
                url: tokenUrl 
            })
        });
        chatManager.connect()
        .then(currentUser => {
            this.currentUser = currentUser;
            this.currentUser.subscribeToRoom({
                roomId: '21153976',
                hooks: {
                  onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    });
                  }
                }
            });
        }).catch(err => {
            console.log('Error on connection', err)
        });
    }
    sendMessage(text){
        this.currentUser.sendMessage({
            text: text,
            roomId: '21153976'
        });
    }
    render() {
        return (
            <div className="app">
                <RoomList />
                <MessageList messages={this.state.messages} />
                <SendMessageForm sendMessage={this.sendMessage} />
            </div>
        );
    }
}

export default App;