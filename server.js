var express = require('express');
var http = require('http');
const path = require('path');
var app = express();
var server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

server.listen(4200, () => console.log(`API running on localhost port 4200`));
