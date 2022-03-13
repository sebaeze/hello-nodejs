var express = require('express');
app = express();
//
var port=process.env.PORT||8080;

app.get('/', function (req, res) {
  res.send('\n\n*** sebastian - version 55 ****\n');
});

app.listen( port , function () {
  console.log('***** port: '+port+'. version 55 --> Example app listening!');
});

