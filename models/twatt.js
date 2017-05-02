const OAuth = require('oauth');
let consKey = process.env.CONSUMER_KEY;
let consSecret = process.env.CONSUMER_SECRET;
let userToken = process.env.USER_TOKEN;
let userSecret = process.env.USER_SECRET;


const oauth = new OAuth.OAuth(
      'https://api.twitter.com/oauth/request_token',
      'https://api.twitter.com/oauth/access_token',
      consKey,
      consSecret,
      '1.0A',
      null,
      'HMAC-SHA1'
    );

let TwittData = {
  searchTag: (query, callback) => {
    let searchStr = query;
    oauth.get(
          'https://api.twitter.com/1.1/search/tweets.json?q=%23'+searchStr,
          userToken, //test user token
          userSecret, //test user secret
          function (e, data){
            if(e) {
              callback(e);
            } else {
              callback(JSON.parse(data));
            }
          });
  },
  searchUser: (user, callback) => {
    oauth.get(
          'https://api.twitter.com/1.1/search/tweets.json?q=%40'+user,
          userToken, //test user token
          userSecret, //test user secret
          function (e, data){
            if(e) {
              callback(e);
            } else {
              callback(JSON.parse(data));
            }
          });
  },
  userTimeline: (user, count, callback) => {
    oauth.get(
          'https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name='+user+'&count='+count,
          userToken, //test user token
          userSecret, //test user secret
          function (e, data){
            if(e) {
              callback(e);
            } else {
              callback(JSON.parse(data));
            }
          });
  },
  postStatus: (status, callback) => {
    oauth.post(
          'https://api.twitter.com/1.1/statuses/update.json',
          userToken, //test user token
          userSecret, //test user secret
          {'status': status},
          function (e, data){
            if(e) {
              callback(e);
            } else {
              callback(JSON.parse(data));
            }
          });
  }
}


module.exports = TwittData;
