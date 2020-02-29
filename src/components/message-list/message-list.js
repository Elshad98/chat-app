import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../message';

import './message-list.css';

class MessageList extends React.Component {
	componentDidUpdate(prevProps) {
		if (prevProps.roomId !== this.props.roomId) {
			const node = ReactDOM.findDOMNode(this);
			node.scrollTop = node.scrollHeight;
		}
	}

	renderDisplay() {
		const { messages } = this.props;
		return (
			<div className="message-list scroll">
				{messages.map((message, index) => (
					<Message key={index} username={message.senderId} text={message.text} />
				))}
			</div>
		);
	}

	renderInfo() {
		return (
			<div className="message-list scroll">
				<div className="join-room">
					&larr; Join a room!
				</div>
			</div>
		);
	}

	render() {
		return this.props.roomId ? this.renderDisplay() : this.renderInfo();
	}
}

export default MessageList;