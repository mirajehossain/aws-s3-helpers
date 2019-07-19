const s3Helper = require('aws-s3-helpers');

const config = {
  secretAccessKey: '',
  accessKeyId: '',
  region: '',
  outputDir: ''
}

  const download = new Helper.Download(config);

  download.downloadS3Folder('bucketName', 'bucket/folder/path')
