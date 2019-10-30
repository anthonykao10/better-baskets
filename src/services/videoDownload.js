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

const downloadVideo = function(video) {

    var params = {
    Bucket: bucketName, 
    Key: 'newTestANTHONY.webm'
  };

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


      // const params = {Bucket: bucketName, Key: 'newTestANTHONY.webm', Body: video};

      // s3.putObject(params, function(err, data) {
      //   if (err) {
      //     console.log(err)
      //   } else {
    
      //     console.log("Successfully uploaded data to " + bucketName + "/" + params.Key);
      //   }
      // });

    }

export default downloadVideo


// // Load the SDK and UUID
// const fs = require('fs');
// const AWS = require('aws-sdk');
// // env["AWS_KEY"]
// // Create an S3 client

// // console.log('\nprocess.env:', process.env);

// const awsConfig = new AWS.Config({
//   credentials: {
//     accessKeyId: process.env.AWS_KEY_ID,
//     secretAccessKey: process.env.AWS_KEY_SECRET
//   },
//   region: 'us-west-1'
// })

// var s3 = new AWS.S3(awsConfig);

// var bucketName = 'betterbaskets'

// const fileDownload = function() {

//   var params = {
//     Bucket: bucketName, 
//     Key: 'newTestANTHONY.webm'
//   };


//   return (() => {
//     return new Promise((resolve, reject) => {
//       s3.getObject(params, function(err, data) {
//         if (err) {
//           console.log(err);
//           reject(err);
//         } else {
//           console.log("Successfully downloaded data " + bucketName + "/" + params.Key);
//           console.log('\ndata:', data);
//           resolve(data);
//         }
//       });
//     });
//   })()
//     .  then((data) => {
//       return new Promise((resolve, reject) => {
//         fs.writeFile(`videos/newTestANTHONY.webm`, data.Body, (err) => {
//           if (err) {
//             console.log(err, "readFile");
//             reject(err);
//           }
//           else {
//             console.log("file saved");
//             resolve();
//           }
//         });
//       });
//     })
//     .catch(err => console.log(err));

// }


// module.exports = fileDownload;