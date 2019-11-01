const path = require('path');

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

const fileDownload = function(referenceID) {

  var params = {
    Bucket: bucketName, 
    Key: `${referenceID}.webm`
  };

  console.log(params)

  return (() => {
    return new Promise((resolve, reject) => {
      s3.getObject(params, function(err, data) {
        if (err) {
          console.log(err);
          reject(err);
        } else {
          console.log("Successfully downloaded data " + bucketName + "/" + params.Key);
          console.log('\ndata:', data);
          resolve(data);
        }
      });
    });
  })()
    .then((data) => {
      return new Promise((resolve, reject) => {
        fs.writeFile(path.resolve(__dirname, '../videos/downloads/unprocessedVideo.webm'), data.Body, (err) => {
          if (err) {
            console.log(err, "readFile");
            reject(err);
          }
          else {
            console.log("file saved");
            resolve();
          }
        });
      });
    })
    .catch(err => console.log(err));
}

module.exports = fileDownload;