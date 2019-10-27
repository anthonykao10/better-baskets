
// Load the SDK and UUID
const fs = require('fs');
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

var s3 = new AWS.S3(awsConfig);

var bucketName = 'betterbaskets'



const fileDownload = function() {


  var params = {
    Bucket: bucketName, 
    Key: 'newTestANTHONY.webm'
  };
  s3.getObject(params, function(err, data) {
    if (err) {
      console.log(err)
    } else {
      console.log("Successfully downloaded data " + bucketName + "/" + params.Key);
      console.log(data)

      fs.writeFileSync("newTestANTHONY.webm", data.Body, (err) => {
        if (err) {
          console.log(err, "readFile")
        }
        else {
          console.log("file saved")
        }

      })



      // fs.readFile(data.Body, (err, video) => {
      //   if (err) {
      //     console.log(err, "readFile")
      //   }
      //   else {
      //     console.log(video)
      //   }

      // })
      // console.log(readFile, "~~~~")
      // console.log(data.Body.toString('utf-8'))
    }
  });


}


fileDownload();