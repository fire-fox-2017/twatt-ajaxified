const oauth = require('oauth');
require('dotenv').config();
var twitter=require('../models/twitter');

var oAuth= function (req,res){
  myOauth = new oauth.OAuth(
    	'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0',
      null,
      'HMAC-SHA1'
  )
  twitter.search(req.params.param, myOauth, function(data) {
    res.send(data);
  })
}
var recent = function(req,res){
  myOauth = new oauth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      process.env.CONSUMER_KEY,
      process.env.CONSUMER_SECRET,
      '1.0',
      null,
      'HMAC-SHA1'
  )
  twitter.getRecent(myOauth, function(data) {
    res.send(data);
  })
}



module.exports = {oAuth, recent};