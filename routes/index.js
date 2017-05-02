var express = require('express');
var router = express.Router();
let OAuth = require('../controllers/twatt.js');

// test page
// router.get('/', (req, res) => {
//   res.send('Up and Running!');
// });

router.get('/searchTag', OAuth.searchTag);
router.get('/searchUser', OAuth.searchUser);
router.get('/:user/:count', OAuth.userTimeline);
router.post('/tweet', OAuth.postStatus);

module.exports = router;
