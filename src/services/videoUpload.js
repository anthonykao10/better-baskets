/*
 * Copyright 2013. Amazon Web Services, Inc. All Rights Reserved.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *     http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
**/
import insertShotData from './insertShotData'

// Load the SDK and UUID
const AWS = require('aws-sdk');
// env["AWS_KEY"]
// Create an S3 client

const awsConfig = new AWS.Config({
  credentials: {
    accessKeyId:'AKIAJB4SS6YLGVFQGHPQ',
    secretAccessKey:'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'
  },
  region: 'us-west-1'
})


const s3 = new AWS.S3(awsConfig);

const bucketName = 'betterbaskets'

const uploadVideo = function(video, reference) {


      var params = {Bucket: bucketName, Key: `${reference}.webm`, Body: video, ACL: 'public-read'};

      s3.putObject(params, function(err, data) {
        if (err) {
          console.log(err)
        } else {
    
          console.log("Successfully uploaded data to " + bucketName + "/" + params.Key);

          insertShotData(reference);

        }
      });

    }

export default uploadVideo
