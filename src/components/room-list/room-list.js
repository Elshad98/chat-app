import React from 'react';
import Spinner from '../spinner';

import './room-list.css';

class RoomList extends React.Component {
    render() {
        const { rooms, roomId } = this.props; 
        if (rooms.length === 0) {
            return (
                <div className="rooms-list rooms-list-loading">
                    <Spinner />
                </div>
            );
        }

        const orderedRooms = [...rooms].sort((a, b) => a.id - b.id);
        return (
            <div className="rooms-list">
                <div className="help-text scroll">
                    <ul>
                        <h3>Your rooms:</h3>
                        {orderedRooms.map((room) => {
                            const active = room.id === roomId ? 'active' : '';
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