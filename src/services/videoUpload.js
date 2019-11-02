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

const uploadVideo = async function (video, reference) {
  const credentials = await fetch('/S3creds')
    .then((res) => res.json());

  const awsConfig = new AWS.Config({
    credentials,
    region: 'us-west-1'
  })
  
  const s3 = new AWS.S3(awsConfig);

  const bucketName = 'betterbaskets'

  var params = { Bucket: bucketName, Key: `${reference}.webm`, Body: video, ACL: 'public-read' };

  return s3.putObject(params).promise().then((data) => {
    return insertShotData(reference);
  });


}

export default uploadVideo
