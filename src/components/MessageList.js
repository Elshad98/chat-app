import React from 'react';
import ReactDOM from 'react-dom';
import Message from './Message';

class MessageList extends React.Component{

	componentDidUpdate(){
		const node = ReactDOM.findDOMNode(this);
		node.scrollTop = node.scrollHeight;
	}

	renderDisplay(){
		const messages = this.props.messages;
		return (
			<div className="message-list">
				{messages.map((message, index) => (
					<Message key={index} username={message.senderId} text={message.text}/>
				))}
			</div>
		);
	}

	renderInfo(){
		return (
			<div className="message-list">
				<div className="join-room">
					&larr; Join a room!
				</div>
			</div>
		);
	}

	render(){
		return this.props.roomId ? this.renderDisplay() : this.renderInfo();
	}
}

export default MessageList;