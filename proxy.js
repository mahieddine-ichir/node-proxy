var express = require('express');
var http = require('http');
var request = require('request');
var cors = require('cors');

var serverConfig = {
  port: process.argv[2],
  url: process.argv[3]
};

var app = express();
app.use(cors());

app.get('/*', function(req, res, next) {
  var toCall = serverConfig.url+req.url;
  console.log('Calling '+toCall);
  request({
      url: toCall,
      method: 'GET'
    }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(response.body));
    } else {
      res.sendStatus(response.statusCode);
    }
  });
});

app.post('/*', function(req, res, next) {
  var toCall = serverConfig.url+req.url;
  console.log('Calling '+toCall);
  request({
      url: toCall,
      method: 'POST'
    }, function(error, response, body) {
    if (!error && response.statusCode == 200) {
      res.json(JSON.parse(response.body));
    } else {
      res.sendStatus(response.statusCode);
    }
  });
});

app.listen(serverConfig.port, function() {
  console.log('Starting proxy server for '+serverConfig.url);
  console.log('CORS-enabled web server listening on port '+serverConfig.port);
});
