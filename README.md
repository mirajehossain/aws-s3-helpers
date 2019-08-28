## AWS S3 Helpers

[![npm](https://img.shields.io/npm/v/aws-s3-helpers.svg)](https://www.npmjs.com/package/aws-s3-helpers)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 
### Description
**AWS S3 download, upload, zip and many more** ✨

```install: npm i --save aws-s3-helpers ```

## Features

* **Download S3 Folders** - Download S3 nested files and folders 

## Examples
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

## TODO
* **Download S3 Folders as zip**
* **Upload multiple file and folder in S3**
* **and so on**


## Contributors

- Md. Alamin [@garciparedes](https://mirajehossain.com)

## Changelog
See [changelog](https://github.com/mirajehossain/aws-s3-helpers/releases) page to get info about release changes.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT © Md. Alamin
