import React from 'react';
import dummyData from './components/dummy-data';
import MessageList from './components/MessageList';

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
                <MessageList messages={this.state.dummyData} />
            </div>
        );
    }
}

export default App;