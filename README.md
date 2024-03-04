# FileUploader

A simple file uploader package for JavaScript applications.

## Installation

You can install the package via npm:

```bash
npm install fileuploader
```

## Usage

To use the file uploader package, simply import the `initFileUploader` function into your JavaScript code and call it with the ID of the target element where you want to render the file uploader:

```javascript
import { initFileUploader } from 'fileuploader';

// Initialize the file uploader
initFileUploader('file-uploader-container');
```

## Features

- Supports uploading files to a server
- Easy integration with JavaScript applications
- Customizable upload behavior and UI

## Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>File Uploader Example</title>
</head>
<body>
  <div id="file-uploader-container"></div>

  <script src="app.js"></script>
</body>
</html>
```

```javascript
// app.js
import { initFileUploader } from 'fileuploader';

// Initialize the file uploader
initFileUploader('file-uploader-container');
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
