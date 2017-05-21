
var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/articles', function(req, res, next) {
  request({
    uri: 'http://ec2-13-58-7-84.us-east-2.compute.amazonaws.com:8080/articles',
    qs: {}
  }).pipe(res)
  .on( 'error', function(err) {
    res.status(500).send(err);
  });
});

module.exports = router;