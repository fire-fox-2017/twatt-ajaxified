const oauth = require('oauth');
require('dotenv').config();

var search=function(param,oauth,cb){
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%40'+param,
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_SECRET,
    function (e,data,res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      cb(data)
    }
  )
}
var getRecent = function(oauth,cb){
  oauth.get(
    'https://api.twitter.com/1.1/statuses/user_timeline.json',
    process.env.ACCESS_TOKEN,
    process.env.ACCESS_SECRET,
    function (e,data,res){
      if (e) console.error(e);
      console.log(require('util').inspect(data));
      cb(data)
    }
  )
}
module.exports = {search, getRecent};