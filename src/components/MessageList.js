import React from 'react';

class MessageList extends React.Component{
	render(){
		const messages = this.props.messages;
		return (
			<div className="message-list">
				{messages.map((message) => (
					<div className="message" key={message.id}>
						<div>
							{message.senderId}
						</div>
						<div>
							{message.text}
						</div>
					</div>
				))}
			</div>
		);
	}
}

export default MessageList;