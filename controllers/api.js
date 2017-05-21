
var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/articles', function(req, res, next) {
  request({
    uri: 'http://ec2-13-58-7-84.us-east-2.compute.amazonaws.com:8080/feed/1',
    qs: {}
  }).pipe(res)
  .on( 'error', function(err) {
    res.status(500).send(err);
  });
});


router.post('/customers', function(req, res, next) {
  console.log(req.body)
  request({url: 'http://ec2-13-58-7-84.us-east-2.compute.amazonaws.com:8080/customers', json: {customer: req.body}, method: 'POST'}, function(err, resp, body) {
    if (err) {return res.status(500).send(err)}
    res.json(body)
  })
});

module.exports = router;