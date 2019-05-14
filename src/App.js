import React from 'react';
import dummyData from './components/dummy-data';
import MessageList from './components/MessageList';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import '@atlaskit/css-reset';
import './styles/index.css';
import {instanceLocator, tokenUrl} from './config';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: dummyData
        };
    }
    componentDidMount(){
        const chatManager = new ChatManager({
            instanceLocator: instanceLocator,
            userId: 'Perborgen',
            tokenProvider: new TokenProvider({ 
                url: tokenUrl 
            })
        })

        // chatManager.connect().then(currentUser => {
        //     currentUser.subscribeToRoom({
        //         roomId: 21153976,
        //         hooks: {
        //             onNewMessage: message => {
        //                 console.log('message.text', message.text);
        //             }
        //         }
        //     })
        // })
        chatManager.connect()
        .then(currentUser => {
            console.log('Successful connection', currentUser)
        }).catch(err => {
            console.log('Error on connection', err)
        })
    }
    render() {
        console.log(this.state.messages);
        return (
            <div className="app">
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

export default App;