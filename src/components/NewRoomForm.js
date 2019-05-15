import React from 'react';

class NewRoomForm extends React.Component{
    constructor(){
        super();

        this.state = {
            roomName: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt){
        this.setState({
            roomName: evt.target.value
        });
    }

    handleSubmit(evt){
        evt.preventDefault();
        this.props.createRoom(this.state.roomName);
        this.setState({
            roomName: ''
        });
    }

    render(){
        return (
            <div className="new-room-form">
                <form onSubmit={this.handleSubmit}>
                    <input 
                        onChange={this.handleChange}
                        value={this.state.roomName}
                        type="text" 
                        placeholder="NewRoomForm" 
                        required />
                    <button id="create-room-btn" type="submit">+</button>
                </form>
            </div>
        );
    }
} 

export default NewRoomForm;