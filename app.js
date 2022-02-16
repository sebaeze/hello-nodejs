var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('\n\n*** sebastian - version 55 ****\n');
});

app.listen(8080, function () {
  console.log('***** version 55 --> Example app listening on port 8080!');
});

