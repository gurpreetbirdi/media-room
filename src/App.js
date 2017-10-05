import React, {
    Component
} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import WebRTC from './components';
import {
    streaming
} from './actions';
import {
    connect
} from 'react-redux';
import './App.css';

class App extends Component {

    handleClick = () => {
        let start = !this.props.isStreaming;
        this.props.dispatch(streaming(start));
    }
    render() {
        let webrtc = null;
        if (this.props.isStreaming === true) {
            webrtc = <WebRTC /> ;
        }
        return ( 
            <div> {webrtc} 
            <RaisedButton className = 'button'
            label = {
                this.props.isStreaming ? 'stop' : 'start'
            }
            primary = {
                true
            }
            onClick = {
                this.handleClick
            }
            /> </div>
        );
    }
}
const mapStateToProps = (state) => ({
    isStreaming: state.isStreaming
});

export default connect(mapStateToProps)(App);