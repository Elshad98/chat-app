import React from 'react';
import dummyData from './components/dummy-data';
import MessageList from './components/MessageList';
import '@atlaskit/css-reset';
import './styles/index.css';

const instanceLocator = "v1:us1:abe8898e-8cfc-405b-899f-b428533baa64";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/abe8898e-8cfc-405b-899f-b428533baa64/token";
const username = "Perborgen";
const roomId = 21148281;

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            messages: dummyData
        };
    }
    componentDidMount() { 
        const chatManager = new Chatkit.ChatManager({
            instanceLocator: instanceLocator,
            userId: username,
            tokenProvider: new Chatkit.TokenProvider({
                url: testToken
            })
        });
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