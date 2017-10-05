import React from 'react';
import {
    render
} from 'react-dom';
import {
    Provider
} from 'react-redux';
import reducer from './reducers';
import {
    createStore
} from 'redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const store = createStore(reducer);

render( <Provider store = {store} >
            <MuiThemeProvider >
            <App />
            </MuiThemeProvider> 
    </Provider>, 
    document.getElementById('root')
)

registerServiceWorker();