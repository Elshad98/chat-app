import React from 'react';
import dummyData from './components/dummy-data';
import MessageList from './components/MessageList';
import '@atlaskit/css-reset';
import './styles/index.css';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: dummyData
        };
    }
    render() {
        console.log(this.state.messages);
        return (
            <div className="app">
                <MessageList messages={this.state.messages} />
            </div>
        );
    }
}

export default App;