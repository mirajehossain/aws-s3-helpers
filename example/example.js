const s3Helper = require('aws-s3-helpers');

const download = new s3Helper.Download({
  secretAccessKey: '',
  accessKeyId: '',
  region: 'us-east-1', 
  downloadPath: 'downloadFolder'
})

download.downloadS3Folder('bucketName', 'bucketFolderURLForDownloadContent')