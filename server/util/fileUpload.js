
// Load the SDK and UUID
const fs = require('fs');
const AWS = require('aws-sdk');
// env["AWS_KEY"]
// Create an S3 client

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
  

  console.log("fileUpload being hit")

  // CANT FIND FILE PATH TO GET BUFFER SO IT CAN SEND TO S3
  fs.readFileSync('../videos/newTestANTHONY.webm', (err, data) => {
    if (err) {
      throw err;
    }
    else {
      console.log(data, "DATA FROM readfile FS")
    }
  })

  // fs.readFile('../videoUploads/processedVideo.mp4', (err, data) => {
  //   if (err) {
  //     throw err;
  //   }
  //   else {
  //     console.log(data, "DATA FROM readfile FS")
  //   }
  // })

  // var params = {Bucket: bucketName, Key: 'newTestANTHONY.webm', Body: video};

  // s3.putObject(params, function(err, data) {
  //   if (err) {
  //     console.log(err)
  //   } else {

  //     console.log("Successfully uploaded data to " + bucketName + "/" + params.Key);
  //   }
  // });

}

module.exports = fileUpload;
