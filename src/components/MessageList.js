import React from 'react';

class MessageList extends React.Component{
	render(){
		const messages = this.props.messages;
		return (
			<ul className="message-list">
				{messages.map((message) => (
					<li className="message" key={message.id}>
						<div>
							{message.senderId}
						</div>
						<div>
							{message.text}
						</div>
					</li>
				))}
			</ul>
		);
	}
}

export default MessageList;