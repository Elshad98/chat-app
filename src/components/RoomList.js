import React from 'react';

class RoomList extends React.Component{
    render(){
        const rooms = this.props.rooms;
        return (
            <div className="rooms-list">
                <div className="help-text">
                    <ul>
                        <h3>Your rooms:</h3>
                        {rooms.map((room) => (
                            <li key={room.id} className="room">
                                <button onClick={() => this.props.subscribeToRoom(room.id)}>
                                    # {room.name}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    }
}

export default RoomList;