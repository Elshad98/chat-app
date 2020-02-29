import React from 'react';

import './room-list.css';

class RoomList extends React.Component {
    render() {
        console.log('ROOMS', this.props.rooms);
        const orderedRooms = [...this.props.rooms].sort((a, b) => a.id - b.id);
        return (
            <div className="rooms-list">
                <div className="help-text">
                    <ul>
                        <h3>Your rooms:</h3>
                        {orderedRooms.map((room) => {
                            const active = room.id === this.props.roomId ? 'active' : '';
                            return (
                                <li key={room.id} className={"room " + active}>
                                    <button onClick={() => this.props.subscribeToRoom(room.id)}>
                                        # {room.name}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RoomList;