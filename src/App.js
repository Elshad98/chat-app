import React from 'react';
import MessageList from './components/MessageList';
import SendMessageForm from './components/SendMessageForm';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import '@atlaskit/css-reset';
import './styles/index.css';
import {instanceLocator, tokenUrl} from './config';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: []
        };
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
            currentUser.subscribeToRoom({
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
    render() {
        return (
            <div className="app">
                <MessageList messages={this.state.messages} />
                <SendMessageForm />
            </div>
        );
    }
}

export default App;