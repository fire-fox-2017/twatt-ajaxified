const Data = require('../models/twatt.js');
let userToken = process.env.USER_TOKEN;
let secret = process.env.USER_SECRET;

let twattControl = {
  searchTag: (req, res) => {
    let string = req.query.q;
    Data.searchTag(string, (data) => {
      if(data) {
        res.send(data);
      } else {
        res.send('errorrrr');
      }
    });
  },
  searchUser: (req, res) => {
    let user = req.query.q;
    Data.searchUser(user, (data) => {
      if(data) {
        res.send(data);
      } else {
        res.send('errorrrr');
      }
    });
  },
  userTimeline : (req, res) => {
    let user = req.params.user;
    let count = req.params.count;
    Data.userTimeline(user, count, (data) => {
      if(data) {
        res.send(data);
      } else {
        res.send('errorrrr');
      }
    });
  },
  postStatus: (req, res) => {
    let status = req.body.status;
    Data.postStatus(status, (data) => {
      if(data) {
        res.send(data);
      } else {
        res.send('errorrrr');
      }
    });
  }
}

module.exports = twattControl;
