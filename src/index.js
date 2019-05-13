import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

const instanceLocator = "v1:us1:abe8898e-8cfc-405b-899f-b428533baa64";
const testToken = "https://us1.pusherplatform.io/services/chatkit_token_provider/v1/abe8898e-8cfc-405b-899f-b428533baa64/token";
const username = "Perborgen";
const roomId = 21148281;

ReactDOM.render(<App />, document.querySelector('#root'));

serviceWorker.unregister();
