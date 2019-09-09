var fs = require('fs');

fs.readdir('./img', function (err, files) {
  if (err) {
    console.error(err);
  } else {
    console.log(files);
  }
});