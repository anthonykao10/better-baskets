// Load the SDK and UUID
const AWS = require('aws-sdk');
// env["AWS_KEY"]
// Create an S3 client

const awsConfig = new AWS.Config({
  credentials: {
    accessKeyId:'AKIAJUQXCWRNBPLVQK5Q',
    secretAccessKey:'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'
  },
  region: 'us-west-1'
})

const s3 = new AWS.S3(awsConfig);

const bucketName = 'betterbaskets'

const uploadVideo = function(video) {
  

      // const params = {Bucket: bucketName, Key: 'newTestANTHONY.webm', Body: video};

      // s3.putObject(params, function(err, data) {
      //   if (err) {
      //     console.log(err)
      //   } else {
    
      //     console.log("Successfully uploaded data to " + bucketName + "/" + params.Key);
      //   }
      // });

    }

export default uploadVideo
