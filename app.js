var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('\n\n*** sebastian - version 22 ****\n');
});

app.listen(8080, function () {
  console.log('***** que se yo --> Example app listening on port 8080!');
});

