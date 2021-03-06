import React from 'react';

import './send-message-form.css';

class SendMessageForm extends React.Component {
    constructor() {
        super();
        this.state = {
            message: ''
        };
    }

    handleChange = (evt) => {
        this.setState({
            message: evt.target.value
        });
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        if (this.state.message) {
            this.props.sendMessage(this.state.message);
        }
        this.setState({
            message: ''
        });
    }

    

    render() {
        return (
            <form
                className="send-message-form"
                onSubmit={this.handleSubmit}>
                <input
                    disabled={!this.props.disabled}
                    onChange={this.handleChange}
                    value={this.state.message}
                    placeholder="Type your message and hit ENTER"
                    type="text"
                />
            </form>
        );
    }
}

export default SendMessageForm