# AWS S3 Helpers
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


**AWS S3 download, upload, zip and many more** ✨

```install: npm i --save aws-s3-helpers ```

# Features

* **Download S3 Folders** - Download S3 nested files and folders 

# Examples
```js
const S3Helpers = require('aws-s3-helpers');

  const config = {
    secretAccessKey: '',
    accessKeyId: '',
    region: '',
  }

  const download = new S3Helpers.Download(config);

  download.downloadS3Folder('bucketName', 'bucket/folder/path', 'outputDir');
```

# TODO
* **Download S3 Folders as zip**
* **Upload multiple file and folder in S3**

# License

MIT © Md. Alamin
