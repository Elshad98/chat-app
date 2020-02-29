import React from 'react';
import MessageList from './components/message-list';
import SendMessageForm from './components/send-message-form';
import RoomList from './components/room-list';
import NewRoomForm from './components/new-room-form';

import APP_CONFIG from './config';
import { ChatManager, TokenProvider } from '@pusher/chatkit-client';
import '@atlaskit/css-reset';
import './styles/reset.css';
import './styles/index.css';


class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            joinableRooms: [],
            joinedRooms: [],
            roomId: null
        };
        this.sendMessage = this.sendMessage.bind(this);
        this.subscribeToRoom = this.subscribeToRoom.bind(this);
        this.getRooms = this.getRooms.bind(this);
        this.createRoom = this.createRoom.bind(this);
    }

    componentDidMount() {
        const chatManager = new ChatManager({
            instanceLocator: APP_CONFIG.instanceLocator,
            userId: 'Perborgen',
            tokenProvider: new TokenProvider({
                url: APP_CONFIG.tokenUrl
            })
        });
        chatManager.connect()
            .then(currentUser => {
                this.currentUser = currentUser;
                this.getRooms();
            }).catch(err => {
                console.log('Error on connection', err)
            });
    }

    getRooms() {
        this.currentUser.getJoinableRooms()
            .then(joinableRooms => {
                this.setState({
                    joinableRooms: joinableRooms,
                    joinedRooms: this.currentUser.rooms
                });
            })
            .catch(err => {
                console.log('Error on joinableRooms: ', err);
            });
    }

    subscribeToRoom(roomId) {
        this.setState({
            messages: []
        });
        this.currentUser.subscribeToRoom({
            roomId: roomId,
            hooks: {
                onMessage: message => {
                    this.setState({
                        messages: [...this.state.messages, message]
                    });
                }
            }
        })
            .then(room => {
                this.setState({
                    roomId: roomId
                });
                this.getRooms();
            })
            .catch(err => {
                console.log('Error on subscribing to room: ', err);
            })
    }

    sendMessage(text) {
        this.currentUser.sendMessage({
            text: text,
            roomId: this.state.roomId
        });
    }

    createRoom(roomName) {
        this.currentUser.createRoom({
            name: roomName
        })
            .then(room => this.subscribeToRoom(room.id))
            .catch(err => {
                console.log('Error with createRoom: ', err);
            });
    }

    render() {
        return (
            <div className="app">
                <RoomList
                    roomId={this.state.roomId}
                    subscribeToRoom={this.subscribeToRoom}
                    rooms={[...this.state.joinableRooms, ...this.state.joinedRooms]} />
                <MessageList
                    messages={this.state.messages}
                    roomId={this.state.roomId} />
                <SendMessageForm
                    disabled={this.state.roomId}
                    sendMessage={this.sendMessage} />
                <NewRoomForm createRoom={this.createRoom} />
            </div>
        );
    }
}

export default App;