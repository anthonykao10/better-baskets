
// Load the SDK and UUID
const fs = require('fs');
const AWS = require('aws-sdk');
// env["AWS_KEY"]
// Create an S3 client

// console.log('\nprocess.env:', process.env);

const awsConfig = new AWS.Config({
  credentials: {
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_KEY_SECRET
  },
  region: 'us-west-1'
})

var s3 = new AWS.S3(awsConfig);

var bucketName = 'betterbaskets'

const uploadVideo = function(video) {

  var params = {Bucket: bucketName, Key: 'newTestANTHONY.webm', Body: video};

  s3.putObject(params, function(err, data) {
    if (err) {
      console.log(err)
    } else {

      console.log("Successfully uploaded data to " + bucketName + "/" + params.Key);
    }
  });

}

export default uploadVideo
