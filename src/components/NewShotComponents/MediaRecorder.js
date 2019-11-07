import React, { Component } from 'react';
 
import uploadVideo from '../../services/videoUpload';

import 'video.js/dist/video-js.css';
import videojs from 'video.js';

import 'webrtc-adapter';
import RecordRTC from 'recordrtc';

// register videojs-record plugin with this import
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';

import referenceGenerator from '../../services/referenceGenerator';
import '../styles/MediaRecorder.css';
    
class MediaRecorder extends Component {
  componentDidMount() {
      // instantiate Video.js
      
      this.player = videojs(this.videoNode, this.props, () => {
          // print version information at startup
          var version_info = 'Using video.js ' + videojs.VERSION +
              ' with videojs-record ' + videojs.getPluginVersion('record') +
              ' and recordrtc ' + RecordRTC.version;
          videojs.log(version_info);
      });

      // device is ready
      this.player.on('deviceReady', () => {
          console.log('device is ready!');
      });

      // user clicked the record button and started recording
      this.player.on('startRecord', () => {
          this.props.setShotUploadComplete(null);
          console.log('started recording!');
      });

      // user completed recording and stream is available 
      this.player.on('finishRecord', () => {
          // recordedData is a blob object containing the recorded data that
          // can be downloaded by the user, stored on server etc.
          const reference = referenceGenerator();
          uploadVideo(this.player.recordedData, reference)
          .then(({config}) => {
            this.props.refreshShotData()
            })
            .catch((err) => console.error('upload video error:', err)
          )
        });
 
      // error handling
      this.player.on('error', (element, error) => {
          console.warn(error);
      });

      this.player.on('deviceError', () => {
          console.error('device error:', this.player.deviceErrorCode);
      });

      // load canvas script
      const script = document.createElement("script");
      script.src = "scripts/canvas.js";
      script.async = true;
      document.getElementById('myVideo').appendChild(script);

  }

  // destroy player on unmount
  componentWillUnmount() {
      if (this.player) {
          this.player.dispose();
      }
    }
    render() {
      return (
      <div data-vjs-player>
          <video id="myVideo" ref={node => this.videoNode = node} className="video-js vjs-default-skin" playsInline></video>
          <canvas id="c"></canvas>
      </div>
      );
  }
}

export default MediaRecorder


