const AWS = require('aws-sdk');
const fs = require('fs');

module.exports = function({ secretAccessKey, accessKeyId, region }) {
  AWS.config.update({
    secretAccessKey,
    accessKeyId,
    region,
  });

  AWS.config.setPromisesDependency(Promise);
  const s3 = new AWS.S3();

  this.downloadS3Folder = async function(bucket, prefix, outputDir) {
    try {
      const paramsForListObjects = {
        Bucket: bucket,
        Prefix: prefix,
        Delimiter: '/',
      };

      const { Contents, CommonPrefixes, Name } = await s3.listObjectsV2(paramsForListObjects).promise();

      if (Contents.length) {
        Contents.forEach((item) => {
          const urlParams = {
            Bucket: paramsForListObjects.Bucket,
            Key: item.Key,
          };

          getBucketObject(urlParams, outputDir)
          .then(file=>console.log('downloaded: ', file))
          .catch(e=>console.log(e));
        });
      }

      if (CommonPrefixes.length) {
        await Promise.all(CommonPrefixes.map(async (element) => {
          await this.downloadS3Folder(Name, element.Prefix, outputDir);
        }));
      }

    } catch (e) {
      console.error(e);
    }
  };

  function getBucketObject(urlParams, outputDir) {

    return new Promise((resolve, reject) => {
      const fullFileDir = `${outputDir}/${urlParams.Key}`;
      const dir = fullFileDir.substring(0, fullFileDir.lastIndexOf('/'));

      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }

      const tempFile = fs.createWriteStream(fullFileDir);
      const stream = s3.getObject(urlParams).createReadStream().pipe(tempFile);

      stream.on('error', (err) => reject(err));

      stream.on('close', () => resolve(fullFileDir));
    });
  };
}
