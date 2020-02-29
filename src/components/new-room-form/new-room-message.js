import React from 'react';

import './new-room-message.css';

class NewRoomForm extends React.Component {
    constructor() {
        super();

        this.state = {
            roomName: ''
        };
    }

    handleChange = (evt) => {
        this.setState({
            roomName: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const roomName = this.state.roomName.trim();
        if (roomName.length > 2) {
            this.props.createRoom(roomName);
            this.setState({
                roomName: ''
            });
        }
    }

    render() {
        return (
            <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input
                        onChange={this.handleChange}
                        value={this.state.roomName}
                        type="text"
                        placeholder="Create a room" />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        );
    }
}

export default NewRoomForm;