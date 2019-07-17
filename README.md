# AWS S3 Helpers
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)


**AWS S3 download, upload, zip and many more** ✨

```install: npm i --save aws-s3-helpers ```

# Features

* **Download S3 Folders** - Recursive download including multiple file and folders
* **Download S3 Folders as zip** - [future]
* **Upload multiple file and folder in S3** - [future]

# Download functions
```js
const S3Helpers = require('aws-s3-helpers');

const s3Helpers = new S3Helpers.Download({
  secretAccessKey: '',
  accessKeyId: '',
  region: '', 
  downloadPath: 'downloadFolder'
});
s3Helpers.downloadS3Folder('bucketName', 'bucketFolderURLForDownloadContent');
```

# License

MIT © Md. Alamin
