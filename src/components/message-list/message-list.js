import React from 'react';
import ReactDOM from 'react-dom';
import Message from '../message';

import './message-list.css';

class MessageList extends React.Component {
	constructor() {
		super();

		this.scrollButton = React.createRef();
	}

	componentDidUpdate() {
		this.scrollToBottom();
	}

	handleScroll = (evt) => {
		const node = evt.currentTarget;
		if ((node.clientHeight + 100) < node.scrollHeight - node.scrollTop) {
			this.scrollButton.current.classList.add('visible');
		}
	}

	handleClick = () => {
		this.scrollToBottom();
	}

	renderDisplay() {
		const { messages } = this.props;
		return (
			<React.Fragment>
				<div className="message-list scroll" onScroll={this.handleScroll}>
					{messages.map((message, index) => (
						<Message key={index} username={message.senderId} text={message.text} />
					))}
				</div>
				<div className="scroll-to-top" onClick={this.handleClick} ref={this.scrollButton}></div>
			</React.Fragment>
		);
	}

	scrollToBottom = () => {
		const node = ReactDOM.findDOMNode(this);
		node.scrollTop = node.scrollHeight;
		if (this.scrollButton.current) {
			this.scrollButton.current.classList.remove('visible');
		}
		
	}

	renderInfo() {
		return (
			<div className="message-list">
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