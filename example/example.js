const const S3Helpers = require('aws-s3-helpers');

const config = {
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  outputDir: ''
}

  const download = new S3Helpers.Download(config);

  download.downloadS3Folder('bucketName', 'bucket/folder/path');
