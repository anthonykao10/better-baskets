
// Load the SDK and UUID
const fs = require('fs');
const AWS = require('aws-sdk');

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
  
  fs.readFile(__dirname + '/../videos/uploads/processedVideo.mp4', (err, data) => {
    if (err) {
      throw err;
    }
    else {

      const params = {Bucket: bucketName, Key: `post-${video}.mp4`, Body: data, ACL: 'public-read'};

      s3.putObject(params, function(err, data) {
        if (err) {
        }
        else {
          console.log("Successfully uploaded data to " + bucketName + "/" + params.Key)
        }
      })


    }
  })

}

module.exports = fileUpload;
