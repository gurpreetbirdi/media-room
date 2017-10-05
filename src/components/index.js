import React, { Component } from 'react';

class WebRTC extends Component {

  componentDidMount=()=>{
    navigator.getUserMedia = navigator.getUserMedia ||
    navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

      var constraints = {
        audio: false,
        video: true
      };
      var video = document.querySelector('video');

      function successCallback(stream) {
        window.stream = stream; // stream available to console
        if (window.URL) {
          video.src = window.URL.createObjectURL(stream);
        } else {
          video.src = stream;
        }
      }

      function errorCallback(error) {
        console.log('navigator.getUserMedia error: ', error);
      }
navigator.getUserMedia(constraints, successCallback, errorCallback);    
}

  render() {
    return (
      <div>
      <video autoPlay></video>
      </div>
    );
  }
}

export default WebRTC;
