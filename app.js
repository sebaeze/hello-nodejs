var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('\n\n*** sebastian - version 44 ****\n');
});

app.listen(8080, function () {
  console.log('***** version 44 --> Example app listening on port 8080!');
});

