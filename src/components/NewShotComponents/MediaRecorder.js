import React, { Component } from 'react';
import uploadVideo from './VideoUpload'
// import './App.css';

import 'video.js/dist/video-js.css';
import videojs from 'video.js';

import 'webrtc-adapter';
import RecordRTC from 'recordrtc';

// register videojs-record plugin with this import
import 'videojs-record/dist/css/videojs.record.css';
import Record from 'videojs-record/dist/videojs.record.js';

import referenceGenerator from '../../services/referenceGenerator'
import insertShotData from '../../services/insertShotData'




// Optional imports for videojs-record plugins
/*
// webm-wasm plugin (npm install webm-wasm @mattiasbuelens/web-streams-polyfill)
// Make sure to copy webm-worker.js and webm-wasm.wasm from
// node_modules/webm-wasm/dist/ to the project's public directory
import '@mattiasbuelens/web-streams-polyfill/dist/polyfill.min.js';
import 'videojs-record/dist/plugins/videojs.record.webm-wasm.js';

// ts-ebml plugin (npm install ts-ebml)
import 'videojs-record/dist/plugins/videojs.record.ts-ebml.js';
*/

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
          console.log('started recording!');
      });

      // user completed recording and stream is available
      this.player.on('finishRecord', () => {
          // recordedData is a blob object containing the recorded data that
          // can be downloaded by the user, stored on server etc.
          const reference = referenceGenerator();
          insertShotData(reference);
        //   uploadVideo(this.player.recordedData, reference);
          console.log(reference, "~~~~~~~~~");
      });

      // error handling
      this.player.on('error', (element, error) => {
          console.warn(error);
      });

      this.player.on('deviceError', () => {
          console.error('device error:', this.player.deviceErrorCode);
      });
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
      </div>
      );
  }
}

export default MediaRecorder


