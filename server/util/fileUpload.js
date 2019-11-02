
// Load the SDK and UUID
const fs = require('fs');
const AWS = require('aws-sdk');
const path = require('path');
const { spawn } = require('child_process');

const awsConfig = new AWS.Config({
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_KEY_SECRET
  },
  region: 'us-west-1'
})

var s3 = new AWS.S3(awsConfig);

var bucketName = 'betterbaskets'

const fileUpload = function(video) {

  const videoConversion = spawn('python',[path.resolve(__dirname, '../lib/python/ffmpeg.py')]);

  videoConversion.on('close', () => {
    
    fs.readFile(__dirname + '/../videos/uploads/processedVideo.webm', (err, data) => {
      if (err) {
        throw err;
      }
      else {
  
        const params = {Bucket: bucketName, Key: `post-${video}.webm`, Body: data, ACL: 'public-read'};
  
        s3.putObject(params, function(err, data) {
          if (err) {
          }
          else {
            console.log("Successfully uploaded data to " + bucketName + "/" + params.Key)
          }
        })
  
  
      }
    })
});
  
}

module.exports = fileUpload;
