const AWS = require('aws-sdk');
const fs = require('fs');
module.exports = function({ secretAccessKey, accessKeyId, region, downloadPath}) {
  AWS.config.update({
    secretAccessKey,
    accessKeyId,
    region,
  });
  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3();

  this.downloadS3Folder = async function(bucket, prefix) {
    try {
      const paramsForListObjects = {
        Bucket: bucket,
        Prefix: prefix,
        Delimiter: '/',
      };
      const data = await s3.listObjectsV2(paramsForListObjects).promise();
      if (data.Contents.length) {
        data.Contents.forEach((item) => {
          const urlParams = {
            Bucket: paramsForListObjects.Bucket,
            Key: item.Key,
          };
         getBucketObject(urlParams, downloadPath)
          .then(downloadDir=>console.log('downloaded: ', downloadDir))
          .catch(e=>console.log(e));
        });
      }
      if (data.CommonPrefixes.length) {
        await Promise.all(data.CommonPrefixes.map(async (element) => {
          await this.downloadS3Folder(data.Name, element.Prefix);
        }));
      }
    } catch (e) {
      console.log('error in download file from s3');
      console.log(e);
      throw e;
    }
  };

  function getBucketObject(urlParams, downloadPath) {
    return new Promise((resolve) => {
      const fullFileDir = `${downloadPath}/${urlParams.Key}`;
      // const fullFileDir = `download/${urlParams.Key}`;
      const dir = fullFileDir.substring(0, fullFileDir.lastIndexOf('/'));
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      const tempFile = fs.createWriteStream(fullFileDir);
      const stream = s3.getObject(urlParams).createReadStream().pipe(tempFile);
      let hadError = false;
      stream.on('error', (err) => {
        console.log('err: ', err);
        hadError = true;
      });
      stream.on('close', () => {
        if (!hadError) {
          resolve(fullFileDir);
        }
      });
    });
  };
}
