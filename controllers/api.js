
var express = require('express');
var request = require('request');

var router = express.Router();

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

router.get('/articles/:id', function(req, res, next) {
  request({
    uri: `http://ec2-52-15-229-70.us-east-2.compute.amazonaws.com:8080/feed/${req.params.id}`,
    qs: {}
  }).pipe(res)
  .on( 'error', function(err) {
    res.status(500).send(err);
  });
});

router.get('/customers', function(req, res, next) {
  request({url: 'http://ec2-52-15-229-70.us-east-2.compute.amazonaws.com:8080/customers',  qs: {}}).pipe(res)
    .on( 'error', function(err) {
      res.status(500).send(err);
    });
});

router.post('/customers', function(req, res, next) {
  request({url: 'http://ec2-52-15-229-70.us-east-2.compute.amazonaws.com:8080/customers', json: {customer: req.body}, method: 'POST'}, function(err, resp, body) {
    if (err) {return res.status(500).send(err)}
    res.json(body)
  })
});

module.exports = router;